---
title: Dias de impulse
date: 2021-05-11T15:42:19.534Z
description: impulsionando
---
# Comandos recorrentes

## Freewilly

### Baixando as coisas

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

# Task de Tagueamento

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

passando a query
?impulseSuiteEnv=dev

### Depois do merge

Rodar o comando pra gerar uma nova versao (abre o circleCI)

 ```bash
$ npm run release
```

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