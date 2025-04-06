/* eslint-disable react/react-in-jsx-scope */
"use client"
import { useState, useEffect } from "react";
import { useTaskHook } from "./hooks/task.hook";
import { fetchWrapper } from "@/utils/fetchWrapper";
import {
  FormProvider,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Pagination } from "../ui/pagination";

interface Task {
  _id: string;
  title: string;
  completed:string;
  completedAt: Date| null;
}

interface ITaksData {
  data: Array<Task>
  page: number;
  totalPages: number;
  totalItems: number;
}
export default function Task() {
  const { taskProps, handleCreate } = useTaskHook();
  const [tasks, setTasks] = useState<Task[] | []>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1)

  const fetchTasks = async () => {
    try {
      const queryParams = new URLSearchParams({
        page: page.toString(),
      });
      const { response }: { response: ITaksData } = await fetchWrapper(
        `${process.env.NEXT_PUBLIC_BASE_URL}/task?${queryParams.toString()}`
      );
      setTotalPages(response.totalPages)
      setTasks(response.data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
  const handleToggleComplete = async (id: string) => {
    try {
      const { response }: { response: any } = await fetchWrapper(`${process.env.NEXT_PUBLIC_BASE_URL}/task/${id}/toggle`, {
        method: "PATCH",
      });

      setTasks(prev =>
        prev.map(task =>
          task._id.toString() === id.toString() ? { ...task, completed: response.task.completed, completedAt: response.task.completedAt } : task
        )
      );
    } catch (err) {
      console.error("Error toggling task status:", err);
    }
  };
  useEffect(() => {
    fetchTasks();
    return taskProps.reset({
      title: "",
    });
  }, [page]);

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="w-full max-w-xl bg-white shadow-md rounded-xl p-6">
      <h1 className="text-xl font-semibold mb-4 text-gray-800">Tasks</h1>
      <FormProvider {...taskProps}>
        <div className="flex gap-2 mb-6">
          <FormField
            control={taskProps.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="h-10 px-4 border rounded-md w-full focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Add a task"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button className="h-10 px-4" onClick={async() => {
              await handleCreate()
              await fetchTasks()
            }
          }>
            Add
          </Button>
        </div>
      </FormProvider>
      <ul className="space-y-4">
        {tasks?.map((task: Task) => (
          <li
            key={task._id}
            className="border rounded-lg px-4 py-3 flex flex-col bg-gray-50"
          >
            <span className="font-medium text-gray-800">
              {task.title} -{" "}
              <span className={task.completed ? "text-green-600" : "text-yellow-600"}>
                {task.completed ? "Completed" : "Pending"}
              </span>
            </span>

            <span className="text-sm text-gray-500 mt-1">
              Completed on: {task.completed && task.completedAt
                ? new Date(task.completedAt).toLocaleString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true,
                  })
                : "—"}
            </span>

            {/* Toggle Button */}
            <button
              className={`mt-2 w-fit text-sm px-3 py-1 rounded font-medium 
                ${task.completed ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
              onClick={() => handleToggleComplete(task._id)}
            >
              {task.completed ? "↩️ Mark as pending" : "✅ Mark as completed"}
            </button>
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  </div>
  );
}