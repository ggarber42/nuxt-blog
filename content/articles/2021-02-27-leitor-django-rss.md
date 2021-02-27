---
title: Leitor Django RSS
date: 2021-02-27T02:36:45.942Z
description: Projeto com django "normal"
---
### Referências

https://www.youtube.com/watch?v=0FTaWat_VsM

#### Montando o ambiente

```bash
mkdir django-rss-reader
cd django-rss-reader/
source venv/bin/activate
```

### Aplicação Django

#### Instalando o django e os primeiros comandos

```bash
pip install django
django-admin startproject rssreader
django-admin startproject rss_project .
python manage.py startapp rss
```

#### Configurando e rodando a aplicação

Primeiro precisamos incluir o app na configuração geral

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rss.apps.RssConfig', #local
]
```

Depois fazemos a primeira migração e finalmente podemos rodar o app.

```bash
python manage.py migrate
python manage.py runserver
```

![](/img/screenshot-from-2021-02-26-23-57-21.png)