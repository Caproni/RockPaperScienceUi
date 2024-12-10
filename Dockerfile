FROM ubuntu:20.04 AS build

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

ARG configuration=production

WORKDIR /build

COPY package.json .
RUN npm install

COPY . .

RUN npm run build -- --output-path=dist --output-hashing=all --configuration=${configuration}

FROM ubuntu:20.04 AS runtime

ENV DEBIAN_FRONTEND=noninteractive

RUN apt-get update && \
    apt-get install -y nginx && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

EXPOSE 8080

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /build/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]