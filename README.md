https://bth.instructure.com/courses/5864

Acronyms: alzv23, amhi22, thre21, turu24



BurgerHub
BurgerHub is a customizable burger ordering system that allows users to order from a menu of burgers, select toppings, side dishes, and beverages.
The application includes an intuitive web-based interface and a backend that manages orders through a MySQL database.

Table of Contents
  Requirements
  Installation
  Usage
  Project Structure
  Configuration Management
  Docker
  Testing
  Contributing

Requirements
Docker Desktop: 
Required for all systems to manage Docker containers and images. Download and install Docker Desktop. https://www.docker.com/products/docker-desktop/

Ubuntu Terminal for Windows:
On Windows, it is recommended to use an Ubuntu terminal (via WSL) for better compatibility. https://ubuntu.com/download/desktop

Installation
Clone the repository:
git clone https://github.com/Dorrachai/PA1489-Group19-BurgerHUB.git
cd PA1489-Group19-BurgerHUB

Usage
Running the Application: 
  Start the docker desktop app
Teminal run:
  docker-compose up --build

Access the Application:

Open your browser and go to http://localhost:8008.
Order Flow:

Select a burger from the menu, customize toppings, and choose sides and drinks.
Submit the order to see confirmation and order ID.

Project Structure
containers/: Holds Docker-related files, database setup scripts, and configuration.
views/: Contains EJS templates for front-end rendering.
routes/: Handles routes for ordering and order processing.
config/: Stores configuration files, including database settings and Docker configuration.
Configuration Management
BurgerHub uses Git for version control and Docker for environment management, which ensures consistency across different setups. Configuration files, including Docker Compose, handle dependencies and the MySQL database setup.

Docker
Containers: There are two main containers—one for the application and one for the MySQL database.
Database Initialization: SQL scripts in docker-entrypoint-initdb.d run automatically to set up and populate the database when the container starts.
Local Infile Setup: Docker automatically configures local-infile for MySQL, ensuring that file imports are supported as needed.

Testing
Manual Testing:
Place orders through the web interface and verify the order data in the database.

Automated Testing:
Run npm test to execute Jest tests for back-end functions.
Cypress can be used for end-to-end testing of the user interface.

Contributing:
Fork and Clone: Fork the repository and clone it locally.
Create a Branch: Make a branch for your feature or bug fix.
Commit and Push: Commit your changes with a descriptive message and push to your fork.
Pull Request: Submit a pull request with a description of your changes.



