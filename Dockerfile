FROM node:14-alpine

# Instalar o Git e o GPG (gnupg) no Alpine
RUN apk update && apk add --no-cache git gnupg

USER node

WORKDIR /home/node/app

# Comando para instalar dependências do NPM e manter o container ativo
CMD [ "sh", "-c", "npm install && tail -f /dev/null" ]
