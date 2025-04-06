import TaskList from "@/components/TaskList";
import { redirect } from "next/navigation";
import { error_path } from "../constants/routes";
import { fetchTasks } from "../gateways/tasks.gateway";
import { TaskProvider } from "../context/TaskContext";

export default async function HomePage() {
  try {
    const tasks = await fetchTasks();
    return (
      <TaskProvider initialTasks={tasks}>
        <main>
          <TaskList />
        </main>
      </TaskProvider>
    );
  } catch (error) {
    redirect(error_path)
  }
}
