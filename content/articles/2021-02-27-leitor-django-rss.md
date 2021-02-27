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
pip install django djangorestframework requets feedparser
django-admin startproject rssreader
django-admin startproject rss_project .
python manage.py startapp rss
```

#### Configurando e rodando a aplicação

Primeiro precisamos incluir o app na configuração geral

````python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework', #3rd
    'rss.apps.RssConfig', #local
]

````

Depois fazemos a primeira migração e finalmente podemos rodar o app.

```bash
python manage.py migrate
python manage.py runserver
```

![](/img/screenshot-from-2021-02-26-23-57-21.png)

#### Criando um superusuário no Django admin

```bash
python manage.py createsuperuser
```

![](/img/screenshot-from-2021-02-27-00-03-30.png)

#### Criando rotas e views

Primeiro criamos a view em  ~rss/views.py

```python
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
   return HttpResponse("RSS Reader Index View")
```

Agora criamos o arquivo em urls dentro do projeto

~rss/urls.py

```python
from django.urls import path

from . import views

urlpatterns = [
   path('', views.index, name='index')
```

e depois a incluímos no app

~rss_project/urls.py

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rss/', include('rss.urls')),
]
```

Agora podemos testar a view em /rss

![](/img/screenshot-from-2021-02-27-00-19-02.png)

### Templates em Django

Para criar um template em Django a gente precisa criar uma estrutura dentro do app "imitando" a original.

```bash
rss

├── templates
│   └── rss
│       ├── base.html
│       └── reader.html
```

O Django utiliza uma linguagem de template dentro do HTML para lidar com os dados dinâmicos.

O base.html vai ser o template pai a partir do qual os outros extendem

base.html`
```HTML
<!DOCTYPE html>
<head>
   <title>Django RSS Reader</title>
</head>
<body>
{% block body %}{% endblock %}
</body>
</html>
```

E agora criamos outros templates que vão extender esse:

reader.html`
```HTML
{% extends 'rss/base.html' %}

{% block body %}
<p>Greetings from reader.html!</p>
{% endblock %}
```

E por fim vamos ligar ele na nossa view

```python
def index(request):
    return render(request,'rss/reader.html')
```

