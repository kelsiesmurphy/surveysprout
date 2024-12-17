# Use the official Node.js 20 LTS image as the base image
FROM node:20

# Install pnpm globally
RUN npm install -g pnpm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN pnpm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port your Nest.js application is listening on
EXPOSE 3004

# Command to start your Nest.js application
CMD [ "pnpm", "run", "start:prod" ]