import { FC } from "react";
import { Task } from "../types/Task";

type Props = {
  tasks: Task[];
  setEditId: (id: string) => void;
  setTitle: (title: string) => void;
  updateTask: (id: string, updates: Partial<Task>) => void;
  deleteTask: (id: string) => void;
};

export const TaskList: FC<Props> = ({ tasks, setEditId, setTitle, updateTask, deleteTask }) => (
  <ul className="space-y-3">
    {tasks.map((task) => (
      <li
        key={task._id}
        className="flex justify-between items-center bg-white rounded-lg px-4 py-3 border border-gray-200 shadow-sm"
      >
        <div className="flex items-center gap-3">
          <button
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
              task.completed ? "bg-red-500 border-red-500" : "border-gray-400"
            }`}
            onClick={() => updateTask(task._id, { title: task.title, completed: !task.completed })}
          >
            {task.completed && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <button
            className={`${task.completed ? "line-through text-gray-400" : ""} focus:outline-none cursor-pointer`}
            onClick={() => {
              setEditId(task._id);
              setTitle(task.title);
            }}
          >
            {task.title}
          </button>
        </div>
        <button className="text-gray-400 hover:text-red-500 cursor-pointer" onClick={() => deleteTask(task._id)}>
          ✕
        </button>
      </li>
    ))}
  </ul>
);