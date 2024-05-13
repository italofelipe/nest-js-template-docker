FROM node:20

# Instala pnpm
RUN npm install -g pnpm

WORKDIR /app

# Copia os arquivos de dependências e instala
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

# Copia o resto do projeto
COPY . .

# Build do projeto
RUN pnpm run build

# Comando para rodar a aplicação, você pode especificar o comando start no docker-compose
CMD ["pnpm", "run", "start:dev"]
