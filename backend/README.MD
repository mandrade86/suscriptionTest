# Backend - TODO API

This is the backend for a TODO application built with **Node.js**, **Express**, **TypeScript**, and **MongoDB (Atlas)**.

---

## Requirements

- **Node.js** >= 18  
- **npm**  
- **MongoDB Atlas** (or a local MongoDB instance)

---

## Installation

1. Clone the repository and navigate into the `backend` folder:

```bash
cd backend
npm install
```

---

## Environment Variables

Create a `.env` file in the root of the backend folder with the following:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

> ℹ️ This file is ignored via `.gitignore` for security.  
> You’ll receive it via email.

---

## Available Scripts

### Start in development mode

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Run unit tests

```bash
npm run test
```

### Run test coverage report

```bash
npm run test:coverage
```

---

## Project Structure

```
src/
├── Config/         # MongoDB connection
├── Tasks/          # Task module (model, controller, routes, service, validation)
├── Middlewares/    # Request validators (e.g. Joi)
test/
└── Tasks/          # Unit tests with Jest
```