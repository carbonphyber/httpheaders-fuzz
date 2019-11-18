FROM node:12.13-alpine AS base

WORKDIR /usr/node
COPY package*.json ./
RUN cat package.json
RUN npm ci --production

FROM base AS test
RUN npm ci
ENTRYPOINT ["npm", "run", "test"]

FROM base AS prod
COPY . .
RUN ls -la
RUN cat src/index.js
ENTRYPOINT ["npm", "start"]
