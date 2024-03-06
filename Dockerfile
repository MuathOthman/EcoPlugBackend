# Step 1: Choose the base image
FROM node:14

# Step 2: Install dependencies required for Docker installation
RUN apt-get update && \
    apt-get install -y apt-transport-https ca-certificates curl gnupg-agent software-properties-common

# Step 3: Add Docker's official GPG key
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -

# Step 4: Add Docker repository to apt sources
RUN add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"

# Step 5: Install Docker
RUN apt-get update && \
    apt-get install -y docker-ce docker-ce-cli containerd.io

# Step 6: Set the working directory inside the container
WORKDIR /app

# Step 7: Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Step 8: Install Node.js dependencies
RUN npm install

# Step 9: Copy the rest of your app's source code
COPY . .

# Step 10: Expose port 3000 to the outside world
EXPOSE 3000

# Step 11: Define the command to run your app
CMD ["node", "server.js"]
