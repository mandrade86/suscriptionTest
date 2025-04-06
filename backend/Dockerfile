FROM node:20.6.0-alpine

WORKDIR /usr/

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 3001

CMD ["sh", "-c", "npm run build && npm run pm2:start"]
