FROM jdkato/vale:latest

ADD styles/ /styles/

RUN apk add bash

ENTRYPOINT ["vale", "--config", "/styles/config.ini"]
