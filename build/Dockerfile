FROM node:16

WORKDIR /app/docs-site
COPY ./docs-site /app/docs-site

COPY ./build/run.sh /build/run.sh
RUN chmod +x /build/run.sh

RUN yarn install

ENTRYPOINT ["/build/run.sh"]
EXPOSE 80