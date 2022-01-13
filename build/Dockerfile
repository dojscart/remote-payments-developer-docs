FROM mcr.microsoft.com/dotnet/sdk:5.0 AS builder

ARG BRANCH_NAME
ARG CLOUDSDK_CONTAINER_CLUSTER

ENV HUGO_VERSION=0.92.0
ADD https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz /tmp/
RUN tar -xf /tmp/hugo_${HUGO_VERSION}_Linux-64bit.tar.gz -C /usr/local/bin/

ADD ./src /src
COPY ./build/updatebaseurl.sh /build/updatebaseurl.sh

RUN chmod +x /build/updatebaseurl.sh
RUN /build/updatebaseurl.sh $BRANCH_NAME $CLOUDSDK_CONTAINER_CLUSTER


RUN hugo --source=/src/ --destination=/public/


FROM nginx:stable-alpine

COPY ./build/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /public/ /usr/share/nginx/html/

EXPOSE 80
