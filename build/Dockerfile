FROM klakegg/hugo as builder

ADD ./src /src
WORKDIR /src

ENTRYPOINT ["hugo", "server -D -p 80"]
