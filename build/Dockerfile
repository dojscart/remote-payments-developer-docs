FROM klakegg/hugo as builder

ADD ./src /src
RUN hugo -b /cx-1039 --source=/src/ --destination=/public/


FROM nginx:stable-alpine

COPY ./build/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /public/ /usr/share/nginx/html/

EXPOSE 80
