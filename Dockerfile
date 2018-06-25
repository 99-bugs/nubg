FROM node:9.11-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
# RUN apk update && apk upgrade && apk add git

COPY package.json package.json
RUN npm install

COPY . .

# Build app
RUN npm run build

# ENV HOST 0.0.0.0
# EXPOSE 3000

# start command
# CMD [ "npm", "start" ]

FROM nginx:alpine  
WORKDIR /usr/share/nginx/html
COPY --from=0 /usr/src/app/dist .