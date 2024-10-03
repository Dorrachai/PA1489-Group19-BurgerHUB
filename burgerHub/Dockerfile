# Use the official Node.js image from Docker Hub
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# RUN mysql -u dbadm -p
# RUN P@ssw0rd
# RUN USE BurgerHub;
RUN cd db-init
RUN mariadb --table < init.sql
RUN cd ..

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 8008

# Command to run the app
CMD ["node", "index.js"]