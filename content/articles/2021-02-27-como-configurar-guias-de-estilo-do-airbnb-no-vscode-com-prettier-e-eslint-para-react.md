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

```json[package.json]
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
 // Apagar abaixo
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
 // Apagar acima
  "browserslist": {
    "production": [
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


```json[.eslintrec.json]
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

```json[.prettierrc]
{
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2,
    "jsxSingleQuote": true
}
```

```console[.editorconfig]
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = false
insert_final_newline = false
```

```json[settings.json]
{
    .....
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "eslint.validate": ["javascript"],
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
}
```

##### Comandos

Ctrl + S -> arruma erros pelo eslint
shift + alt + f -> formata arquivo