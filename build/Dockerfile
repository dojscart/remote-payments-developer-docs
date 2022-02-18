FROM node:16

ARG BRANCH_NAME
ARG CLOUDSDK_CONTAINER_CLUSTER

WORKDIR /app/docs-site
COPY ./docs-site /app/docs-site

COPY ./build/updatebaseurl.sh /build/updatebaseurl.sh
RUN chmod +x /build/updatebaseurl.sh
RUN /build/updatebaseurl.sh $BRANCH_NAME $CLOUDSDK_CONTAINER_CLUSTER

RUN yarn install && yarn build
ENTRYPOINT ["yarn", "run", "serve", "--port", "80", "--host", "0.0.0.0"]

EXPOSE 80