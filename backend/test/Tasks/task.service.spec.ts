import {
    createTaskService,
    getTasksService,
    updateTaskService,
    deleteTaskService,
  } from "../../src/Tasks/task.service";
  import { Task } from "../../src/Tasks/task.model";
  
  jest.mock("../../src/Tasks/task.model");
  
  describe("Task Service", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("should create a task", async () => {
      const mockData = { title: "Task", completed: false };
      const mockSave = jest.fn().mockResolvedValue(mockData);
  
      (Task as unknown as jest.Mock).mockImplementation(() => ({
        save: mockSave,
      }));
  
      const result = await createTaskService(mockData);
      expect(result).toEqual(mockData);
      expect(mockSave).toHaveBeenCalled();
    });
  
    it("should return all tasks", async () => {
      const mockTasks = [{ title: "T1", completed: false }];
      (Task.find as jest.Mock).mockResolvedValue(mockTasks);
  
      const result = await getTasksService();
      expect(result).toEqual(mockTasks);
    });
  
    it("should update a task", async () => {
      const mockTask = { title: "Updated", completed: true };
      (Task.findByIdAndUpdate as jest.Mock).mockResolvedValue(mockTask);
  
      const result = await updateTaskService("123", mockTask);
      expect(result).toEqual(mockTask);
    });
  
    it("should delete a task", async () => {
      const mockTask = { title: "Deleted", completed: false };
      (Task.findByIdAndDelete as jest.Mock).mockResolvedValue(mockTask);
  
      const result = await deleteTaskService("123");
      expect(result).toEqual(mockTask);
    });
  });