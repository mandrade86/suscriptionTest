"use client";

import { useState } from "react";
import { useTasks } from "../features/tasks/hooks";
import { TaskItem } from "../components/TaskItem";

export default function Home() {
  const [title, setTitle] = useState("");
  const { tasks, loading, addTask, deleteTask, updateTask } = useTasks();

  const handleToggle = (id: string, completed: boolean) => {
    updateTask(id, { completed });
  };

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Tasks</h1>
      <div className="flex gap-2 mb-4">
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New task"
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onDelete={deleteTask}
              onToggle={handleToggle}
            />
          ))}
        </ul>
      )}
    </main>
  );
}
