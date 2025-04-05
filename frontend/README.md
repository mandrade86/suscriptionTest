# Frontend - TODO App

This is the frontend for a TODO application built with **Next.js 14**, **React 18**, **Tailwind CSS**, and **TypeScript**.

---

## Requirements

- **Node.js** >= 18  
- **npm**  
- The backend server running on `http://localhost:3001` (or update the API URL)

---

## Installation

```bash
npm install
```

---

## Running the App

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Project Structure

```
src/
├── app/                  # Next.js App Router structure
│   ├── layout.tsx        # Global layout
│   ├── page.tsx          # Home page with the task list
│   └── fonts/            # Local font files
├── components/           # Reusable UI components (e.g. TaskItem)
├── config/               # Configuration constants (e.g. API base URL)
├── features/tasks/       # Tasks domain module
│   ├── api.ts            # API calls
│   ├── hooks.ts          # Custom hook for task logic
│   ├── services.ts       # Placeholder for future logic
│   └── types.ts          # Type definitions
├── styles/               # Global styles
└── ...
```

