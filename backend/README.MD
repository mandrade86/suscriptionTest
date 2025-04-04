## Getting Started

The following project is a TODO application using Express and MongoDB. The goal is to resolve all possible errors and apply performance optimization techniques and best practices in terms of code quality and project structure.

It must work perfectly together with Frontend.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env` file in the root directory with the following content:
```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/test
```

## Running the Application

1. Start MongoDB:
```bash
# Make sure MongoDB is running on your system
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. The server will be running at [http://localhost:3001](http://localhost:3001)

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # HTTP request handlers
│   ├── services/        # Business logic
│   ├── repositories/    # Data access layer
│   ├── interfaces/      # TypeScript interfaces
│   ├── entities/        # Database models
│   ├── dtos/           # Data Transfer Objects
│   ├── middlewares/    # Express middlewares
│   ├── config/         # Configuration files
│   ├── utils/          # Utility functions
│   └── routes/         # Route definitions
```

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /task` - Create a new task
- `PUT /task/:id` - Update a task
- `DELETE /task/:id` - Delete a task

## Features

- RESTful API
- MongoDB integration
- TypeScript support
- Clean architecture
- Error handling
- Input validation
- Performance optimization
