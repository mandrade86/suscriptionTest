import { Task } from "../features/tasks/types";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

export const TaskItem = ({ task, onDelete, onToggle }: Props) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      <div>
        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.title}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          className="text-sm text-blue-600 hover:underline"
          onClick={() => onToggle(task._id, !task.completed)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="text-sm text-red-600 hover:underline"
          onClick={() => onDelete(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
