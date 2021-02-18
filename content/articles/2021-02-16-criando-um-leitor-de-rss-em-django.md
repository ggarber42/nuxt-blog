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
~ $ python manage.py migrate
~ $ python manage.py runserver
```
(a gente faz a migração para ele parar de reclamar)

E agora, dentro das configurações do Django a gente precisa registrar um app:

~server/rss_project/settings.py 
```python
# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rss.apps.RssConfig' #mine
]
```