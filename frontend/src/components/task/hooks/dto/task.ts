import { ReactNode } from "react";
import { UseFormReturn } from "react-hook-form";

export interface ITaskDataContextData {
  taskProps: UseFormReturn<
    {
      title: string;
    },
    any,
    undefined
  >;
  handleCreate: () => void;
}

export interface ITaskDataProviderProps {
  children: ReactNode;
}
