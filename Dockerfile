# Use a base image with Node.js
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY ./ ./

# Install dependencies
RUN npm install

# Expose port 3000
EXPOSE 3000

# Command to start the React app
CMD ["npm", "start"]
