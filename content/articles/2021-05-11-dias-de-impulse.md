---
title: Dias de impulse
date: 2021-05-11T15:42:19.534Z
description: impulsinando
---
# Comandos recorrentes


## Freewilly

# Baixando coisas

```bash
fw suite install etna
```
enta no caso  a <api_key>

# Subindi suite

```bash
fw suite up etna
```

Ativando o impulse via backend

https://share.linx.com.br/pages/viewpage.action?pageId=170018266

```bash
curl --request GET \
--url 'https://www.maisvaidosa.com.br/app/impulse/config?token=b6e6db6e-467c-4de8-8f5e-e22c7565da81' \
--header 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'

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
