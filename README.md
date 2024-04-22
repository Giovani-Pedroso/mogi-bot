Codigo testado no Arch Linux
Não usar o wifi do evento

# Crie um bot no telegram e adicione o token no arquivo .env

```
TOKEN_TELEGRAM=""
```

# Instalação do node_modules

rode o comando

```
npm install
```

# Configure as variaveis de ambiende

use os mesmos valores de AWS_SECRET_ACCESS_KEY para AWS_ACCESS_KEY_ID_T
use os mesmos valores de AWS_SECRET_ACCESS_KEY para AWS_SECRET_ACCESS_KEY_T

adicione as credenciais do AWS no arquivo .env

```
AWS_ACCESS_KEY_ID_T=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY_T=""
AWS_SECRET_ACCESS_KEY=""
AWS_SESSION_TOKEN=""
```

E adicione as variaveis obtidas do AWSPowerUserAccess no terminal como no exemplo abaixo

```
export AWS_ACCESS_KEY_ID=""
export AWS_SECRET_ACCESS_KEY=""
export AWS_SESSION_TOKEN=""
```

# Iniciar o bot

```
npx ts-node src/index.ts
```
