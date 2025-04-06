# INSTRUCTIONS TO RUN THE PROJECT

To run the project properly, follow the steps below:

1. **Install dependencies** 
  You need to install dependencies in all three folders: `subscriptionTest`, `backend`, and `frontend`:
  - yarn install

2. To run both projects, access `subscriptionTest` folder and run the following command (This will run both servers concurrently).
  - yarn start

3. Create envirorment variables below:
  - **Backend** (backend/.env):
      NODE_ENV=development
      PORT=3001
      MONGO_HOST=localhost
      MONGO_PORT=27017
      MONGO_DB_NAME=test

  - **Frontend** (frontend/.env):
      BASE_URL=http://localhost:3000/api
      API_URL=http://localhost:3001/api

4. To run the projects seperatly, run the following commands:
  - For BACKEND:
    cd backend
    yarn dev

  - For FRONTEND:
    cd frontend
    yarn dev

# NOTES
- The project structure, environment setup, and `.gitignore` were manually configured.
- The frontend uses the Mantine UI library to help build a modern and responsive user interface.
- This project was designed with scalability and clean code in mind. It includes centralized API handling, global error management, and a shared task context for state management on the frontend.

---------------------------------------------------------------------------------------------------------

BACKEND Instructions

Getting Started
The following project is a TODO application using Express and MongoDB. The goal is to resolve all possible errors and apply performance optimization techniques and best practices in terms of code quality and project structure.

It must work perfectly together with Frontend.


FRONTEND Instruction

Getting Started
The following project is a TODO application using Next.js. The goal is to resolve all possible errors and apply performance optimization techniques and best practices in terms of code quality and project structure.

It must work perfectly together with the backend.

Include UI libraries to improve the app’s appearance. (Choose the one you prefer).
Implement a method to delete any item in the TODO List.
Implement a method to update any item in the TODO List.
