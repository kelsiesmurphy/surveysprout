# Base image
FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND pnpm-lock.yaml are copied
COPY package*.json ./

# Install app dependencies using pnpm
RUN pnpm install

# Bundle app source
COPY . .

# Copy Prisma-related files from the monorepo's /prisma package
COPY packages/prisma/schema.prisma ./prisma/
COPY packages/prisma/migrations ./prisma/migrations/

# Copy environment files from /prisma
COPY packages/prisma/.env ./


# Creates a "dist" folder with the production build
RUN pnpm run build

# Expose the port on which the app will run
EXPOSE 3001

# Start the server using the production build
CMD ["pnpm", "run", "start:prod"]
