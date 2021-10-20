FROM klakegg/hugo as builder

ADD ./src /src
WORKDIR /src

EXPOSE 80
ENTRYPOINT ["hugo", "server -D -p 80"]
