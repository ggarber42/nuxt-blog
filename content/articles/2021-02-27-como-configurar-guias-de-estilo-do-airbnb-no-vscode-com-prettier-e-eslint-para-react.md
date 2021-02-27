---
title: Como configurar guias de estilo do Airbnb no vscode com prettier e eslint
  para React
date: 2021-02-27T12:53:23.921Z
description: como configurar
---
### Guias de estilo

#### VsCode

Primeiro preciamos adicionar as extensões do Eslint, Prettier e EditorConfig ao VsCode.

##### Criano uma aplicação react

```console[terminal]
mkdir my-app
cd my-app
npx create-react-app .
```

Aqui vamos **editar** o package.json para tirar o eslint padrão

```console[terminal]

```

##### Instalando dependências

##### Eslint

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

##### Prettier

```console[terminal]
npm i prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

#### Editando/ Criando arquivos


```console[.eslintrec.json]
{
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "no-unused-vars": ["warn"],
        "react/jsx-filename-extension": [
            "error",
            {
              "extensions": [".js", ".jsx"]
            }
          ]
    }
}

```

```console[.prettierrc]
{
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "jsxSingleQuote": true
}
```