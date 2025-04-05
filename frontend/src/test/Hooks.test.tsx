import { render, screen, act } from "@testing-library/react";
import { useTasks } from "../features/tasks/hooks";
import * as api from "../features/tasks/api";
import { useEffect } from "react";

jest.mock("../features/tasks/api");

const mockTasks = [{ _id: "1", title: "Test Task", completed: false }];

const TestComponent = () => {
  const { tasks, loading, addTask } = useTasks();

  useEffect(() => {
    if (!loading) addTask("Nueva");
  }, [loading]);

  return (
    <div>
      <div>{loading ? "Loading..." : "Loaded"}</div>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

describe("useTasks (with component wrapper)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (api.fetchTasksApi as jest.Mock).mockResolvedValue(mockTasks);
    (api.createTaskApi as jest.Mock).mockResolvedValue(mockTasks[0]);
  });

  it("renders tasks and calls addTask", async () => {
    await act(async () => {
      render(<TestComponent />);
    });

    expect(api.fetchTasksApi).toHaveBeenCalledTimes(2);
    expect(await screen.findByText("Test Task")).toBeInTheDocument();
    expect(api.createTaskApi).toHaveBeenCalledWith("Nueva");
  });
});