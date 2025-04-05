'use client';

import { useState } from "react";
import { useTasks } from "../features/tasks/hooks";
import { TaskItem } from "../components/TaskItem";

export default function Home() {
  const [title, setTitle] = useState("");
  const { tasks, loading, addTask } = useTasks();

  const handleAdd = () => {
    if (!title.trim()) return;
    addTask(title);
    setTitle("");
  };

  return (
    <main>
      <h1>Tasks</h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem key={task._id} task={task} />
          ))}
        </ul>
      )}
    </main>
  );
}
