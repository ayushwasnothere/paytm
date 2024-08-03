Welcome file
Welcome file

# Paytm Clone - MERN Stack Application

This repository contains the source code for a full-stack application built using the MERN stack (MongoDB, Express.js, React, Node.js). This project is a simple version of Paytm, featuring basic functionalities such as sign-in, sign-up, and sending money. It serves as a beginner project to apply and demonstrate the skills learned in the MERN stack.

## Features

- **User Authentication:**
  - Sign-in
  - Sign-up
- **Money Transactions:**
  - Send money to other users using autogenerated random wallets (no bank API is used)

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- Docker
- Node.js
- npm or yarn

### Running the Application

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ayushwasnothere/Paytm.git
   cd Paytm
   ```

2. **Build and run the MongoDB Docker container:**

   ```bash
   # Build the Docker image
   docker build -t paytm-mongo .

   # Run the Docker container
   docker run -d -p 27017:27017 --name paytm-mongo paytm-mongo
   ```

3. **Install server dependencies and start the backend:**

   ```bash
   cd backend
   npm install
   npm start
   ```

4. **Install client dependencies and start the frontend:**

   ```bash
   cd ../frontend
   npm install
   npm run build
   npm run dev
   ```

   Ensure Tailwind CSS and Vite are set up in the frontend by including the necessary configuration files. You can find the Tailwind CSS setup and Vite configuration in the `frontend` directory.

The application should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Project Structure

- **Backend:**

  - Located in the `backend` directory
  - Node.js and Express.js for server-side logic
  - MongoDB for database

- **Frontend:**
  - Located in the `frontend` directory
  - React.js for client-side logic
  - Tailwind CSS for styling
  - Vite as the build tool

## Dockerfile

The Dockerfile included in this repository is used to build and run a MongoDB database locally. Ensure Docker is installed on your system and follow the commands provided above to get the MongoDB container up and running.

## Contributing

Feel free to fork this repository and contribute by submitting pull requests. Any contributions that help improve this project are welcome!

## License

This project does not currently have a license. You may use it for personal or educational purposes, but if you wish to use it in any other capacity or distribute it, please consider adding a license.

## Connect with me

- **Twitter:** [@ayushwasnothere](https://twitter.com/ayushwasnothere)
- **Instagram:** [@citxruzz](https://instagram.com/citxruzz)
- **LinkedIn:** [@ayushwasnothere](https://linkedin.com/in/ayushwasnothere)

---

This project is a beginner-level implementation to apply the concepts learned in the MERN stack. It demonstrates a basic understanding of creating a full-stack application with user authentication and money transaction features, styled using Tailwind CSS and built with Vite. Money transactions refer to sending money between autogenerated random wallets; no bank API is used.
