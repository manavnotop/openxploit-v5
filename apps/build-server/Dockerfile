FROM node:18-alpine AS base

RUN apk add --no-cache git libc6-compat
RUN npm i -g pnpm

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENV GITHUB_REPO=""

EXPOSE 3000

CMD ["/entrypoint.sh"]