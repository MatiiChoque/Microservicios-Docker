FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8004

CMD [ "npm","start" ]

# docker build -t database
# docker run -p 8004:8004 database

# With network 
# docker run --network=starwars --name=database -p 8004:8004

