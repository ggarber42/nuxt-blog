---
title: Leitor Django RSS
date: 2021-02-27T02:36:45.942Z
description: Projeto com django "normal"
---
### Referências

https://www.youtube.com/watch?v=0FTaWat_VsM

#### Montando o ambiente

´´´bash
mkdir django-rss-reader
cd django-rss-reader/
source venv/bin/activate
´´´

### Aplicação Django

#### Instalando o django e os primeiros comandos

´´´bash
pip install django
django-admin startproject rssreader
django-admin startproject rss_project .
python manage.py startapp rss
´´´
´´´python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rss.app.RssConfig', #local
]
´´´