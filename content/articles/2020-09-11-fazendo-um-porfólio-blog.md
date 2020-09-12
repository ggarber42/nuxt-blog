---
title: Fazendo um Porfólio Blog
date: 2020-09-11T00:20:48.699Z
description: descrição de um blog
---
## Instalações

Primeiro vamos criar um novo projeto gatsby

 ```console[terminal]
foo@bar:~$ gatsby new port-blog
```

Agora podemos começar a colocar os **pacotes node** para ajudar

 ```console[terminal]
foo@bar:~$ yarn add env-cmd
foo@bar:~$ yarn add moment  
foo@bar:~$ yarn add moment-locales-webpack-plugin
foo@bar:~$ yarn add gatsby-remark-prismjs prismjs
```

e por último os plugins

 ```console[terminal]
foo@bar:~$ 
```

## Configurações

Criamos na raíz do projeto um arquivo .env para abrigar as variáveis de ambiente

```
GATSBY_GRAPHQL_IDE=playground
```
e depois no package.json

```json[package.json]
"scripts": {
...
"develop": "env-cmd -f .env gatsby develop",
...
```

com esse ajuste podemos utilizar o graphql playground.