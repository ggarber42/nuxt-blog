---
title: Docker Dump - Querido Diário
date: 2020-10-10T14:59:08.648Z
description: dump do installfest da sprint do querido diario
---

https://docs.docker.com/engine/install/ubuntu/
https://docs.docker.com/engine/install/linux-postinstall/

## Installfest

```console[terminal]
foo@bar:~$ docker run hello-world
foo@bar:~$ make setup (no caso do querido-diario por causa do makefike)
foo@bar:~$ docker-compose run --rm processing bash -c "cd data_collection && scrapy crawl sc_florianopolis -a start_date=2020-10-06"
foo@bar:~$ docker-compose up
```

## Rodando a spyder

```console[terminal]
foo@bar:~$ make shell "https://www.joinville.sc.gov.br/jornal/index/page/1"
>> fetch("http://www.joinville.sc.gov.br/jornal/index/page/1")
>> response
<200 https://www.joinville.sc.gov.br/jornal/index/page/1>
>>itens=response.css('ul.jornal li')
>>> itens[0].css("span.article-date::text").extract()[-1]
>>> date_raw = itens[0].css("span.article-date::text").extract()[-1]
>>> dat = "/".join(date_raw.split("|"))
>>> date = dateparser.parse(dat, languages=["pt"]).date()
>>> url = itens[0].css("a").attrib["href"]
>>> response.css("ul.pagination li.next a::attr(href)").get()
'http://wwwold.joinville.sc.gov.br/jornal/index/page/2'
```