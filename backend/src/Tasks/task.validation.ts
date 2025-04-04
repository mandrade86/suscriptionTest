import Joi from "joi";
import { CreateTaskDto, UpdateTaskDto } from "./task.interfaces";

export const createTaskSchema: Joi.ObjectSchema<CreateTaskDto> = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean().optional(),
});

export const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDto> = Joi.object({
  title: Joi.string().optional(),
  completed: Joi.boolean().optional(),
});
