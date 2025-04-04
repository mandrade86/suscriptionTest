'use client';
import { useState, useCallback } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export default function Home() {
  const {
    tasks,
    loading,
    addTask,
    updateTask,
    deleteTask,
  } = useTasks();

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const handleSubmit = useCallback(() => {
    if (editId) {
      updateTask(editId, { title });
      setEditId(null);
    } else {
      addTask(title);
    }
    setTitle("");
  }, [editId, title, updateTask, addTask]);

  return (
    <div className="flex flex-col bg-white w-full max-w-[400px] rounded-xl shadow-xl mx-auto p-6 m-12">
      <h1 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        To-Do List <span>📋</span>
      </h1>

      <TaskForm
        title={title}
        setTitle={setTitle}
        isEditing={!!editId}
        onSubmit={handleSubmit}
      />

      {loading ? (
        <p className="text-gray-400 text-sm text-center">Loading tasks...</p>
      ) : (
        <TaskList
          tasks={tasks}
          setTitle={setTitle}
          setEditId={setEditId}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      )}
    </div>
  );
}