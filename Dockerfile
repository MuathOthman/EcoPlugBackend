# Step 1: Choose the base image
FROM node:14

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your app's source code
COPY . .

# Step 6: Expose port 3000 to the outside world
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["node", "server.js"]
