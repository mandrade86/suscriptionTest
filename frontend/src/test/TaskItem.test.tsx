import { render, screen, fireEvent } from "@testing-library/react";
import { TaskItem } from "../components/TaskItem";
import { Task } from "../features/tasks/types";

const mockTask: Task = {
  _id: "1",
  title: "Test Task",
  completed: false,
};

describe("TaskItem", () => {
  it("renders task title", () => {
    render(
      <TaskItem
        task={mockTask}
        onDelete={() => {}}
        onToggle={() => {}}
      />
    );

    expect(screen.getByText("Test Task")).toBeInTheDocument();
  });

  it("calls onDelete when delete button is clicked", () => {
    const onDelete = jest.fn();

    render(
      <TaskItem task={mockTask} onDelete={onDelete} onToggle={() => {}} />
    );

    fireEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(onDelete).toHaveBeenCalledWith("1");
  });

  it("calls onToggle when checkbox is changed", () => {
    const onToggle = jest.fn();

    render(
      <TaskItem task={mockTask} onDelete={() => {}} onToggle={onToggle} />
    );

    fireEvent.click(screen.getByRole("checkbox"));
    expect(onToggle).toHaveBeenCalledWith("1", true);
  });
});