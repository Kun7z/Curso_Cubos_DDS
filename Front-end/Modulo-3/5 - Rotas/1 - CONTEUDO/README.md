## Documentação da API para Integração

## URL da API

```javascript=
    https://api-crud-user.pedagogico.cubos.academy
```

---

## Rotas

### POST `/login`

Permite você fazer o login na requisição

- Body da requisição

```jsonld=
    {
	"email": "jessica.medeiros@cubos.academy",
	"senha": "12345678"
    }
```

- Resposta da requisição quando houver sucesso

```jsonld=
    {
      "usuario": {
        "id": 1,
        "nome": "Jess",
        "email": "jessica.medeiros@cubos.academy"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0ODQ2NzIxLCJleHAiOjE2NjQ4NzU1MjF9.tV21FxS0qZ3-16g8rHR_sw-YuSRtAJEAXXzZBOupbD8"

    }
```

---

### POST /usuarios

Permite você cadastrar um novo usuário

Body da requisição

```jsonld=
{
    "nome": "Jess",
    "email": "jessica.medeiros@cubos.academy",
    "senha": "123456"
}
```

A resposta é:

```jsonld=
{
  "id": 2,
  "nome": "Jess",
  "email": "jessica.medeiros@cubos.academy"
}

```

---

## Documentação da API de transações local

1. Instale a biblioteca Json server

```shell
npm i json-server
```

2. Execute

```shell
npx json-server db.json --watch
```

## Endpoints:

### POST /transactions

Permite você cadastrar uma nova transação usuário

Body da requisição

```jsonld=
 {
      "id": "e5664c11-45e8-497c-b058-f95b24e44800",
      "description": "Internet",
      "price": 10000
}
```

A resposta é:

```jsonld=
 {
      "id": "e5664c11-45e8-497c-b058-f95b24e44800",
      "description": "Internet",
      "price": 10000
}

```

### GET /transactions

Permite você listar as transações:

A resposta é como essa:

```jsonld=
[
    {
        "id": "e5664c11-45e8-497c-b058-f95b24e44800",
        "description": "Internet",
        "price": 10000
    }
]
```
