# TODO Application

A full-stack TODO application built with Express, MongoDB, and Next.js.

## Project Structure

```
.
├── backend/           # Express.js backend
└── frontend/          # Next.js frontend
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file with the following content:
```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/test
```

4. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The backend will be running at [http://localhost:3001](http://localhost:3001)

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Install UI dependencies:
```bash
npm install @headlessui/react @heroicons/react tailwindcss postcss autoprefixer
# or
yarn add @headlessui/react @heroicons/react tailwindcss postcss autoprefixer
```

4. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The frontend will be running at [http://localhost:3000](http://localhost:3000)

## Features

### Backend
- Express.js with TypeScript
- MongoDB integration
- Clean architecture
- RESTful API
- Error handling
- Input validation
- Performance optimization

### Frontend
- Next.js with TypeScript
- Modern UI with Tailwind CSS
- Accessible components with Headless UI
- Responsive design
- State management with custom hooks
- Error handling
- Loading states

## API Endpoints

- `GET /tasks` - Get all tasks
- `POST /task` - Create a new task
- `PUT /task/:id` - Update a task
- `DELETE /task/:id` - Delete a task

## Development

- Backend runs on port 3001
- Frontend runs on port 3000
- MongoDB runs on default port 27017

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
