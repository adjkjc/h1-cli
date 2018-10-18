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
RUN NODE_OPTIONS="--max_old_space_size=1000 " npx vuepress build

FROM nginx:alpine
COPY --from=build /src/site/.vuepress/dist /usr/share/nginx/html
