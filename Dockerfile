# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --configuration=production

# Stage 2: Serve
FROM nginx:alpine

# Copy our custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build output (Verify this path matches your local 'dist' folder!)
COPY --from=build /app/dist/shopping-cart /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]