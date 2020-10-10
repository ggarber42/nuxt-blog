---
title: Docker Dump - Querido Diário
date: 2020-10-10T14:59:08.648Z
description: dump do installfest da sprint do querido diario
---

https://docs.docker.com/engine/install/ubuntu/
https://docs.docker.com/engine/install/linux-postinstall/

```console[terminal]
foo@bar:~$ docker run hello-world
foo@bar:~$ make setup (no caso do querido-diario por causa do makefike)
foo@bar:~$ docker-compose run --rm processing bash -c "cd data_collection && scrapy crawl sc_florianopolis -a start_date=2020-10-06"
foo@bar:~$ docker-compose up
```
