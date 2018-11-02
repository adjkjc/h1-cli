# rbx-static-docs

[![Docker Repository on Quay](https://quay.io/repository/hyperone/rbx-static-docs/status "Docker Repository on Quay")](https://quay.io/repository/hyperone/rbx-static-docs)

HyperOne website made using VuePress - static website generator build on top of Vue.js.

See more:

 * [VuePress](https://vuepress.vuejs.org/)
 * [Vue.js](http://vuejs.org/)

## Goal

 * Encourage community to edit content by publishing source code of selected section

## Dictionary

 * healtcheck - sonda
 * workload - obciążenie robocze

Online dictionaries:

 * https://www.microsoft.com/en-us/language/default.aspx
 * https://www.computerworld.pl/slownik/angielski/W/1.html

## Media standard

* Images resolution
  - 1200x628 - for Facebook and Twitter
  - 600x300 - for blog post

* Image format
  - png
  - jpg
  
* Topis
    * We avoid physical servers - we do not want to stutter with physical servers, because we are not worried about them (we do not feel them). Of course, there servers are servers, but not important.

## Code style

* We don't wrap lines by hand. Use soft wrap in code editor instead.

## Install

```bash
$ make
$ cd site
$ npm install
$ npx vuepress dev
```

## Run

```bash
$ docker-compose up
```

The service should be available at [localhost:8080](http://localhost:8080/)

## Build & push

```bash
$ docker-compose build
$ docker-compose push
```

Requires access rights to [Quay.io/hyperone](https://quay.io/repository/hyperone).

## Helps

* [Name comparision of providers](https://docs.google.com/spreadsheets/d/17ukWwekH0PVzY_MTmPA4UMZ45xywK0Lt_2GXFbGG03Q/edit#gid=0)
