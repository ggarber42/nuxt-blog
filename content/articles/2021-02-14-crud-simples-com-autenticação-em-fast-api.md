---
title: CRUD Simples com Autenticação em Fast API
date: 2021-02-14T15:20:15.287Z
description: acompanhamento de um desenvolvimento/tutorial
---
## Primeiros passos

Buscando alguns tutoriais de referência:

>
> https://fastapi.tiangolo.com/ 
> https://testdriven.io/blog/fastapi-react/
> https://developer.mongodb.com/how-to/FARM-Stack-FastAPI-React-MongoDB/
> https://fastapi.tiangolo.com/tutorial/
>

## Criando pastas e instalando módulos

Primeiro criamos a pasta do projeto e do backend

```bash
$ mkdir fastapi-crud
$ mkdir fastapi-crud/backend
$ cd backend
```
Depois, criamos o _virtual environment_ (ambiente virtual) para instalar os módulos python.

```bash
$ virtualenv venv
$ source venv/bin/activate
$ pip install fastapi uvicorn
```

Agora criamos nosso primeiro arquivo

```bash
$ touch main.py
```


```python
from typing import Optional

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Optional[str] = None):
    return {"item_id": item_id, "q": q}
```