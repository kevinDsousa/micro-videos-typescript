FROM node:19-alpine3.18

ENV JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"

WORKDIR /home/node/app

RUN apk update && \
    apk add --no-cache git gnupg openjdk11 zsh curl wget && \
    sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.2.1/zsh-in-docker.sh)" -- \
    -t https://github.com/romkatv/powerlevel10k.git \
    -p git \
    -p git-flow \
    -p https://github.com/zsh-users/zsh-autosuggestions \
    -p https://github.com/zsh-users/zsh-syntax-highlighting \
    -p https://github.com/zdharma-continuum/fast-syntax-highlighting \
    -a 'export TERM=xterm-256-color'

USER node

# Comando para instalar dependências do NPM e manter o container ativo
CMD ["sh", "-c", "npm install && tail -f /dev/null"]
