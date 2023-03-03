FROM node:19-alpine3.15 AS dev

WORKDIR /app

VOLUME ["/app"]

EXPOSE 4200


# Production Image
FROM node:19-alpine3.15 AS prod

WORKDIR /app

COPY . ./

RUN npm install

CMD [ "npm": "serve:prod" ]

EXPOSE 4200