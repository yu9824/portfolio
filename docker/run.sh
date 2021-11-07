#!/bin/sh
docker container run -it --rm --name github-pages --mount type=bind,src=$(pwd),dst=/usr/src/app -p "4000:4000" starefossen/github-pages:latest