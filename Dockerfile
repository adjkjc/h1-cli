FROM node as build

# install core dependencies
WORKDIR /src/site
COPY ./site/package*.json /src/site/
RUN npm install

# build modules
WORKDIR /src
COPY . /src
RUN make

# build site
WORKDIR /src/site
RUN npx vuepress build

FROM nginx:alpine
COPY --from=build /src/site/.vuepress/dist /usr/share/nginx/html
