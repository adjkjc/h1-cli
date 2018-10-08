FROM node as build

# install core dependencies
WORKDIR /src/site
COPY ./site/package*.json /src/site/
RUN npm ci

# build modules
WORKDIR /src
COPY . /src
RUN make

# build site
WORKDIR /src/site
ENV NODE_ENV production
RUN npx vuepress build

FROM nginx:alpine
COPY --from=build /src/site/.vuepress/dist /usr/share/nginx/html
