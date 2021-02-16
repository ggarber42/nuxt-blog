---
title: Criando um leitor de RSS em Django
date: 2021-02-16T02:09:15.454Z
description: seguindo tutorial
---
### Referências

>
> https://www.youtube.com/watch?v=0FTaWat_VsM
>

### Primeiros comandos

```bash
~ $ mkdir backend
~ $ rm -rf backend/
~ $ mkdir server
~ $ mkdir client
~ $ cd server/
~ $ virtualenv venv
~ $ source venv/bin/activate
```

### Instalação

```bash
~ $ pip install django
```

E agora iniciamos um novo projeto django

```bash
~ $ django-admin startproject rss_project .
```

E agora criamos o app em sí

```bash
~ $ python manage.py startapp rss
```

E podemos rodar o app com

```bash
~ $ python manage.py runserver
```
