## Getting Started

The following project is a TODO application using Next.js. The goal is to resolve all possible errors and apply performance optimization techniques and best practices in terms of code quality and project structure.

It must work perfectly together with the backend.

- Include UI libraries to improve the app's appearance. (Choose the one you prefer).
- Implement a method to delete any item in the TODO List.
- Implement a method to update any item in the TODO List.

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Install UI dependencies:
```bash
npm install @headlessui/react @heroicons/react tailwindcss postcss autoprefixer
# or
yarn add @headlessui/react @heroicons/react tailwindcss postcss autoprefixer
```

3. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

## Running the Application

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
frontend/
├── src/
│   ├── api/           # API service layer
│   ├── components/    # Reusable UI components
│   ├── features/      # Feature-specific components
│   ├── hooks/         # Custom React hooks
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
```

## Features

- Create, read, update, and delete tasks
- Mark tasks as complete/incomplete
- Modern UI with Tailwind CSS
- Accessible components with Headless UI
- Responsive design
- Error handling
- Loading states
