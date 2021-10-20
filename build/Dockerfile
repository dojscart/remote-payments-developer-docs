FROM klakegg/hugo as builder

ARG BRANCH_NAME

ADD ./src /src

COPY ./build/updatebaseurl.sh /build/updatebaseurl.sh
RUN chmod +x /build/updatebaseurl.sh
RUN /build/updatebaseurl.sh $BRANCH_NAME

RUN hugo --source=/src/ --destination=/public/


FROM nginx:stable-alpine

COPY ./build/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /public/ /usr/share/nginx/html/

EXPOSE 80
