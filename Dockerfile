#first container to be dropped (could be nakmed with FROM ... as <tag>)
FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install
COPY . .

RUN npm run build

# second container (copy --from=0 => as source form this container)
FROM nginx
COPY --from=0 /app/build /usr/share/nginx/html