FROM node:18-alpine


COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port React's development server runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
