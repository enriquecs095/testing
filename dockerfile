FROM node:18-alpine3.17

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
#install dependencies
RUN npm install && npm install cors && npm install dotenv
# Bundle app source
COPY . .

EXPOSE 1337
CMD [ "node","index.js"] 

