# Usar uma imagem base Node.js
FROM node:18

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Expor a porta em que sua aplicação roda
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
