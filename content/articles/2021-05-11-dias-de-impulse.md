---
title: Dias de impulse
date: 2021-05-11T15:42:19.534Z
description: impulsionando
---

# Task de Tagueamento

```bash
fw suite install etna
cd na pasta
npm run clean
npm run bootstrap
```

o bootstrap pode dar erro varias vezes

enta no caso  a <api_key>

### Subindo suite

```bash
fw suite up etna
```

### Querystring

#### ?impulseSuiteEnv=dev

### Flags JSON

Muitas vezes as flags no se adequam ao projeto (possuem campos como true que não estão habilitados)

Pra resolver, se faz um PUT em https://clients.chaordicsystems.com/clients/[APIKEY] com o campo no body o que se tem do GET. Mas com as flags atualizadas.

### Deploy

Depois do commit, se faz o PR, code review, rodar o release e depois um job no circle ci

Ativando o impulse via backend

https://share.linx.com.br/pages/viewpage.action?pageId=170018266

O comando abaixo retorna se a ApiKey está ativa

```bash
curl --request GET \
--url 'https://www.maisvaidosa.com.br/app/impulse/config?token=b6e6db6e-467c-4de8-8f5e-e22c7565da81' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'
```

Atualiza os campos para enable e também adiciona pedaços que faltam no JSON.

```bash
curl --request PUT \
--url 'https://www.maisvaidosa.com.br/app/impulse/config?token=b6e6db6e-467c-4de8-8f5e-e22c7565da81' \
--header 'content-type: application/json' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36' \
--data '{
"ApiKey": "maisvaidosa",
"IsMetaEnabled": true,
"MetaVersion": "IU"
}'
```

### Depois do merge

Rodar o comando pra gerar uma nova versao (abre o circleCI)

```bash
$ npm run release
```

# Saru

Rodar esse comando para configurar

```bash
TOKEN=$(curl --silent --request POST --url https://atd-atlas.apps.linximpulse.net/atlas/token --http1.1 --header "Content-type: application/json" --data '{ "username": "guilherme.garber", "password": "XXXXX" }' | jq -r '.token') && curl --silent --request POST --url https://atd-atlas.apps.linximpulse.net/api/tests/configs/ --http1.1 --header "Content-Type: application/json" --data @saru.json --header "Authorization: Bearer ${TOKEN}"
```

ou

```bash
TOKEN=$(curl --silent --request POST --url https://atd-atlas.apps.linximpulse.net/atlas/token --http1.1 --header "Content-type: application/json" --data '{ 'username': \'$PLAT_USER\', 'password': '$PLAT_PASSWORD\' }' | jq -r '.token') && curl --silent --request POST --url https://atd-atlas.apps.linximpulse.net/api/tests/configs/ --http1.1 --header 'Content-Type: application/json' --data @saru.json --header 'Authorization: Bearer ${TOKEN}'
```

depois rodar comandos dentro do circle dados no template da task e atualizar o Readme.

## Dias de jake

![](/img/screenshot-from-2021-05-20-17-50-24.png)

![](/img/screenshot-from-2021-05-20-17-51-28.png)

![](/img/screenshot-from-2021-05-20-17-51-28.png)

```bash
$ git add -i
```

![](/img/screenshot-from-2021-05-20-17-56-05.png)

```bash
$ zcat json/drogasil-busca-1-local.json.gz | grep 13086 | jq .name
```

![](/img/screenshot-from-2021-05-20-17-56-05.png)

```bash
$ xmllint --format --nocdata drogasil-busca-1-local | grep -A 30 -B 2 13086
```

# Dias de Shopback

# Dias de Onsite

```bash
fw install apikey
cd na pasta
npm run clean
npm run bootstrap
fw up apikey
```

pra debugar, procurar pelo all? no network filtrando por JS

![](/img/2021-06-10_14-46.png)