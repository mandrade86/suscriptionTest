"use client";

import { useState } from "react";
import { Plus, Loader2, ListTodo } from "lucide-react";

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
    <main className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100 py-10 px-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
          <ListTodo className="w-8 h-8" /> TODO List
        </h1>

        <div className="flex gap-2">
          <input
            className="flex-1 px-4 py-2 rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="New task"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition flex items-center gap-2"
            onClick={handleAdd}
          >
            <Plus className="w-4 h-4" /> Add
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center text-gray-500 items-center gap-2">
            <Loader2 className="animate-spin w-5 h-5" />
            Loading...
          </div>
        ) : (
          <ul className="space-y-3">
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
      </div>
    </main>
  );
}
