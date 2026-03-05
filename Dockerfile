# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app

# Define a variable that defaults to 'production'
ARG BUILD_CONFIG=production

COPY package*.json ./
RUN npm install
COPY . .

# Use the variable in the build command
RUN npm run build -- --configuration=$BUILD_CONFIG

# Stage 2: Serve
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Note: Ensure this path matches your project name
COPY --from=build /app/dist/shopping-cart /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
