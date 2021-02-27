---
title: Como configurar guias de estilo do Airbnb no vscode com prettier e eslint
  para React
date: 2021-02-27T12:53:23.921Z
description: como configurar
---
### Guias de estilo

##### Criano uma aplicação react

```console[terminal]
mkdir my-app
cd my-app
npx create-react-app .
```

##### Elisnt

Primeiro a gente instala o eslint. O "-D" mostra que é uma dependência dev

```console[terminal]
npm i eslint -D
npx eslint --init
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON
```
E agora roda o init para configurar o arquivo .eslintrc

```console[terminal]
yarn run eslint --init
yarn run v1.22.5
✔ How would you like to use ESLint? · problems
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ What format do you want your config file to be in? · JSON
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
✔ Would you like to install them now with npm? · No / Yes
Successfully created .eslintrc.json file in /home/ggarber/hello-world/configure-linting
Done in 33.12s.
```