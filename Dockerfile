# Build and Test
FROM node:alpine3.11 as test
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn
COPY src ./src
COPY public ./public
COPY ./next-env.d.ts ./next.config.js ./package.json ./tsconfig.json ./yarn.lock ./

ARG API_TELLDUS
ENV API_TELLDUS=$API_TELLDUS
ARG AUTH0_BASE_URL
ENV AUTH0_BASE_URL=$AUTH0_BASE_URL
ARG AUTH0_ISSUER_BASE_URL
ENV AUTH0_ISSUER_BASE_URL=$AUTH0_ISSUER_BASE_URL
ARG AUTH0_SCOPE
ENV AUTH0_SCOPE=$AUTH0_SCOPE

RUN yarn build
CMD yarn lint

# Production
FROM node:alpine3.11 as prod
ENV NODE_ENV=production

WORKDIR /app
COPY ./package.json ./yarn.lock ./
COPY --from=test /app/node_modules ./node_modules
RUN yarn install --ignore-scripts --prefer-offline
COPY ./public ./public
COPY --from=test /app/.next ./.next
CMD yarn start
