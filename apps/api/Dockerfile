FROM node:20 AS build

WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
COPY .env .env
RUN npm install
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node:20
WORKDIR /app
COPY package.json .
COPY prisma ./prisma/
COPY .env .env
RUN npm install --only=production
COPY --from=build /app/dist ./dist

CMD [ "npm", "run", "start:prod" ]
