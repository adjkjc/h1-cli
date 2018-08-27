# rbx-static-docs

[![Docker Repository on Quay](https://quay.io/repository/hyperone/rbx-static-docs/status "Docker Repository on Quay")](https://quay.io/repository/hyperone/rbx-static-docs)

HyperOne website made using VuePress - static website generator build on top of Vue.js.

See more:

* [VuePress](https://vuepress.vuejs.org/)
* [Vue.js](http://vuejs.org/)

## Goal

* Encourage community to edit content by publishing source code of selected section

## Dictionary

* healtcheck - sonda kondycji

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
