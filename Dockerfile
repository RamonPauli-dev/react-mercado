# 1. Use uma imagem base com Node.js para compilar o projeto
FROM node:18 AS build

# 2. Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# 3. Copie o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# 4. Instale as dependências
RUN npm install

# 5. Copie o restante do código da aplicação para o contêiner
COPY . .

# 6. Compile o projeto para produção
RUN npm run build

# 7. Use uma imagem base Nginx para servir os arquivos estáticos
FROM nginx:alpine

# 8. Copie os arquivos compilados para o diretório padrão de conteúdo estático do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# 9. Copie o arquivo de configuração personalizado do Nginx (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# 10. Exponha a porta em que o Nginx está rodando
EXPOSE 80

# 11. Comando padrão para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
