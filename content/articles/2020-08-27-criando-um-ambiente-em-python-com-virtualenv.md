---
title: Criando um ambiente em Python com virtualenv
date: 2020-08-27T02:44:02.446Z
description: aqui temos os comandos para ativar e desativar o ambiente virtual
  criado em python
---
No terminal vamos instalar o virtualenv, criar uma pasta para o projeto, entrar nela e depois criar o ambiente.


```console[terminal]
foo@bar:~$ pip3 install virtualenv
foo@bar:~$ mkdir project
foo@bar:~$ cd project
foo@bar:~$ virtualenv venv
```
Para o ativar:

```console[terminal]
foo@bar:~$ source venv/bin/activate
(venv) foo@bar:~$
```

e desativar:

```console[terminal]
(venv) foo@bar:~$ deactivate
```