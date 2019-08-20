FROM node:8

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./


# Copy app source code
COPY . .

# Expose port and start application
EXPOSE 3000
CMD [ "npm", "start" ]

RUN chmod +x startup.sh
RUN npm install -g nodemon