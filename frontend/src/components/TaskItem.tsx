import { Task } from "../features/tasks/types";

interface Props {
  task: Task;
  onDelete: (id: string) => void;
  onToggle: (id: string, completed: boolean) => void;
}

export const TaskItem = ({ task, onDelete, onToggle }: Props) => {
  return (
    <li>
      {task.title} - {task.completed ? "Done" : "Pending"}

      <button onClick={() => onToggle(task._id, !task.completed)}>
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => onDelete(task._id)} style={{ marginLeft: 8 }}>
        Delete
      </button>
    </li>
  );
};