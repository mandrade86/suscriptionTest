"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { fetchWrapper } from "@/utils/fetchWrapper";
import toast from "react-hot-toast";

import { ITaskDataContextData, ITaskDataProviderProps } from "./dto/task";
import { z } from "zod";

const TaskContext = createContext<ITaskDataContextData>(
  {} as ITaskDataContextData
);

export function TaskDataProvider(props: ITaskDataProviderProps) {
  const taskSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be longer than three characters",
    }),
  });

  type ItaskSchema = z.infer<typeof taskSchema>;

  const taskProps = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      title: "",
    },
  });

  const handleCreate = async (data: ItaskSchema) => {
    try {
      const { title } = data;

      await fetchWrapper(`${process.env.NEXT_PUBLIC_BASE_URL}/task`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });

      toast.success("Task submitted successfully!", {
        duration: 4000,
        position: "top-right",
      });
      taskProps.reset({
        title: "",
      });
    } catch (error: any) {
      console.log(error, "error");
      toast.error("Error submitting the form. Please try again.");
    }
  };

  return (
    <TaskContext.Provider
      value={{
        taskProps,
        handleCreate: taskProps.handleSubmit(handleCreate),
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export function useTaskHook() {
  const context = useContext(TaskContext);

  return context;
}
