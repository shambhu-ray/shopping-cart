# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve
FROM nginx:alpine
# We copy your specific build folder here:
COPY --from=build /app/dist/shopping-cart /usr/share/nginx/html

# Modern GCP Cloud Run Requirement: 
# 1. Create a template for Nginx to listen on the $PORT variable
# 2. Use 'envsubst' to swap $PORT for the actual number at runtime
CMD ["/bin/sh", "-c", "sed -i 's/listen  80;/listen '\"$PORT\"';/' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]