import { Trash2 } from "lucide-react";

import { Task } from "../features/tasks/types";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

export const TaskItem = ({ task, onDelete, onToggle }: Props) => {
  return (
    <li className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-md shadow-sm">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task._id, !task.completed)}
          className="accent-blue-600 w-5 h-5"
        />
        <span className={task.completed ? "line-through opacity-60" : ""}>
          {task.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 hover:text-red-700 transition"
      >
        <Trash2 size={20} />
      </button>
    </li>
  );
};
