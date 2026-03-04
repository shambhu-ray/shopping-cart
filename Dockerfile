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
# We'll use a custom command to make Nginx listen on $PORT
CMD ["nginx", "-g", "daemon off;"]