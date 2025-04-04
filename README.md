# 📝 Todo App

A full-stack TODO application built with **Next.js**, **Tailwind CSS**, **Express.js**, **MongoDB**, and **Docker**. Users can add, complete, update, and delete tasks with a clean and responsive UI.

---

## 🚀 Features

- Add, update, and delete tasks
- Mark tasks as completed
- Real-time UI updates with feedback via toast notifications
- Responsive and modern design using Tailwind CSS
- REST API with Express + MongoDB
- Containerized with Docker & Docker Compose

---

## 🗂️ Project Structure

```
root/
├── backend/             # Express.js API
│   ├── src/
│   ├── package.json
│   └── tsconfig.json
├── frontend/            # Next.js App
│   ├── app/
│   ├── hooks/
│   ├── types/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   └── tailwind.config.js
├── mongo-data/          # MongoDB volume data (ignored)
├── docker-compose.yml
└── README.md
```

---

## 🐳 Docker Setup

Ensure Docker is installed, then run:

```bash
docker-compose up --build
```

> This spins up MongoDB.

---

## 🧑‍💻 Local Development

### 1. Clone the repo

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Start Backend

```bash
cd backend
npm install
npm run dev
```

> Runs on `http://localhost:3002`

### 3. Start Frontend

```bash
cd frontend
npm install
npm run dev
```

> Runs on `http://localhost:3000`

---

## 📦 API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/tasks`         | Get all tasks            |
| POST   | `/task`          | Add new task             |
| PUT    | `/task/:id`      | Update task (title, done)|
| DELETE | `/task/:id`      | Delete a task            |

---

## 💅 Tech Stack

- **Frontend:** Next.js 14, Tailwind CSS, React Hot Toast
- **Backend:** Express.js, Mongoose, TypeScript
- **Database:** MongoDB
- **Containerization:** Docker & Docker Compose

---

## 📁 .env Example

For the backend:

```env
MONGO_URI=mongodb://mongodb:27017/test
PORT=3002
```

---

## 🤝 Author

Made with ❤️ by **Harys Vizcaino**

- Email: [harysvizcaino@gmail.com](mailto:harysvizcaino@gmail.com)

