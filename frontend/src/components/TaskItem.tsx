import { Task } from "../features/tasks/types";

interface Props {
  task: Task;
}

export const TaskItem = ({ task }: Props) => {
  return (
    <li>
      {task.title} - {task.completed ? "Done" : "Pending"}
    </li>
  );
};