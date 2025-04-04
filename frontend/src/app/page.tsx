'use client';

import { useEffect, useState } from 'react';
import { useTasks } from '../hooks/useTasks';
import { TaskItem } from '../components/TaskItem';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [title, setTitle] = useState('');
  const {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  } = useTasks();

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleAddTask = async () => {
    if (!title.trim()) return;
    try {
      await createTask({ title: title.trim() });
      setTitle('');
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await updateTask(id, { completed });
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleEdit = async (id: string, title: string) => {
    try {
      await updateTask(id, { title });
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Todo List
          </h1>
          
          {error && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <div className="flex space-x-4 mb-6">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter a new task"
              onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
              className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
            <button
              onClick={handleAddTask}
              disabled={loading}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Task
            </button>
          </div>

          {loading && (
            <div className="text-center py-4">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary-500 border-t-transparent"></div>
              <p className="mt-2 text-sm text-gray-500">Loading...</p>
            </div>
          )}

          <ul className="space-y-3">
            {tasks.map((task) => (
              <TaskItem
                key={task._id}
                task={task}
                onToggleComplete={handleToggleComplete}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>

          {!loading && tasks.length === 0 && (
            <p className="text-center text-gray-500 py-8">
              No tasks yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
