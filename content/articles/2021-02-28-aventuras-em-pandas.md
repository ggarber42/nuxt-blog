---
title: Aventuras em Pandas
date: 2021-02-28T01:15:41.707Z
description: aventuras
---
## Instalando o Jupyter

```python
 python3 -m venv .venv
source .venv/bin/activate
pip install jupyterlab pandas
jupyter notebook
```

![](/img/screenshot-from-2021-02-27-22-27-53.png)

### Puxando detalhes de uma coluna

Primeiro podemos referenciar uma coluna com a seguinte notaçao **df.race**

``

![](/img/screenshot-from-2021-05-05-22-39-31.png)

``

Utilizando essa notaçao podemos chamar o metodo **describe()**

![](/img/screenshot-from-2021-05-05-22-41-20.png)

E como a propriedade que queremos e o unique, podemos chamar da seguinte forma **df.race.describe()\["unique"]**

![](/img/screenshot-from-2021-05-05-22-43-17.png)

![](/img/screenshot-from-2021-05-05-23-04-19.png)

### Filtrando

![](/img/screenshot-from-2021-05-05-23-50-04.png)

### Porcetagem

shape\[0] pega a linha



![](/img/screenshot-from-2021-05-05-23-51-55.png)