---
title: Utilizando Módulos em Node JS
description: exemplo detalhado de um módulo a partir de seu repositório
alt: Utilizando Módulos em Node JS
date: 2020-09-03T02:49:16.540Z
---

Primeiro foi baixado o repositório do módulo


```console[terminal]
foo@bar:~$ git clone module_folder
```
e depois no mesmo terminal abrimos um ambiente em node:

```js[terminal]
const mod = require('./module_folder');
```

e é isso!!!