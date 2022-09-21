# Entity Manager

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Entity manger is a simple api server which expose 3 apis for Entities management

- GET /entities - recieve all entities
- POST /entities - add aditional entity and recive the entity with generated id
- POST /entities/:id - recieve specific entity by id

## Running

```sh
clone the repository
build Dockerfile
run build image with port farward to 8080
use curl or any api tool such as postman for sending api request
```