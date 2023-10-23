FROM node:20.2.0-alpine

# create and change the app directory
WORKDIR /usr/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure copying both package.json AND package-lock.json (when available).
# Copying the first prevents re-runing npm install on every code chage.
COPY . .

# Install production dependencies
RUN npm ci --only=production

# Install additional dependencies including 'autoprefixer'
RUN npm install autoprefixer

# Build the app
RUN npm run build

# Start the application
CMD ["npm", "start"]
