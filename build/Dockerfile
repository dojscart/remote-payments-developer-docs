FROM klakegg/hugo as builder

ARG BRANCH_NAME

ADD ./src /src
ADD ./build/update-base-url.sh /build

RUN /build/update-base-url.sh $BRANCH_NAME
RUN hugo --source=/src/ --destination=/public/


FROM nginx:stable-alpine

COPY ./build/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /public/ /usr/share/nginx/html/

EXPOSE 80
