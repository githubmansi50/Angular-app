FROM node:alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

# FROM tomcat
# COPY --from=builder EncryptDecrypt.war /usr/local/tomcat/webapps/EncryptDecrypt.war
