#
# Building the full dependencies, to generate /_site
#
FROM node:14.18.1-alpine AS build

WORKDIR /usr/src/app

COPY package*.json yarn.lock ./

RUN yarn --frozen-lockfile

COPY . .

RUN yarn build


#
# Packaging the prod application
#
FROM nginx:1.21.4-alpine AS packaging

COPY --from=build /usr/src/app/_site /usr/share/nginx/html/
