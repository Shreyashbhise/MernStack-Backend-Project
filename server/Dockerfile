FROM node:18-alpine

WORKDIR /app

#copy .json file

COPY package*.json ./

RUN npm install

# copy the rest of the code

COPY . .

EXPOSE 8000

# start the backend application
CMD ["nodemon", "app.js"]