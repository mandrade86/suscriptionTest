"use client";
import { Container, Group, Button, Box, Text, Card, Center, Pagination, ScrollArea } from "@mantine/core";
import TaskCard from "./TaskCard";
import { useDisclosure } from "@mantine/hooks";
import { TaskAdapter } from "../adapters/task.adapter";
import { useApi } from "../hooks/useApi";
import { useEffect, useState } from "react";
import { IconPlus } from "@tabler/icons-react";
import { CreateTaskDTO, Task, UpdateTaskDTO } from "../types/tasks";
import { TaskModal } from "./TaskModal";
import { modals } from "@mantine/modals";
import { useTasks } from "../context/TaskContext";

export default function TaskList() {
  const { tasks, fetchTasks, currentPage, setCurrentPage, total } = useTasks();
  const [currentTask, setCurrentTask] = useState<Task>();
  const [opened, handler] = useDisclosure(false);
  const adapter = new TaskAdapter();
  const { request, loading } = useApi();

  const handleSubmit = async (values: Task) => {
    if (!values._id) {
      return handleCreateTask(values);
    } else {
      return handleEditTask(values);
    }
  };

  const handleCreateTask = async (values: CreateTaskDTO) => {
    const newTask = await request(() => adapter.createTask(values), {
      success: "Task successfully created!",
      error: "An error occurred while creating the task.",
    });

    if (!newTask) return false;
    
    setCurrentPage(1);
    await fetchTasks();
    return true;
  };

  const handleEditTask = async (values: UpdateTaskDTO) => {
    const updatedTask = await request(() => adapter.updateTask(values), {
      success: "Task successfully updated!",
      error: "An error occurred while updating the task.",
    });

    if (!updatedTask) return false;

    await fetchTasks();
    setCurrentPage(1);
    return true;
  };

  const handleDeleteTask = async (id: string) => {
    const deletedTask = await request(() => adapter.deleteTask(id), {
      success: "Task successfully deleted!",
      error: "An error occurred while deleting the task.",
    });

    if (deletedTask) await fetchTasks();
  };

  const handleOpenModal = (task?: Task) => {
    if (task) setCurrentTask(task);
    handler.open();
  };

  const handleCloseModal = () => {
    handler.close();
    setCurrentTask(undefined);
  };

  const openDeleteModal = (taskId: string, title: string) =>
    modals.openConfirmModal({
      title: `Delete Task - ${title}`,
      centered: true,
      children: (
        <>
          <Text size="sm">Are you sure you want to delete this task?</Text>
          <Text c="dimmed" size="xs">
            This action cannot be undone.
          </Text>
        </>
      ),
      labels: { confirm: "Delete", cancel: "Cancel" },
      confirmProps: { size: "sm", color: "red" },
      cancelProps: { size: "sm" },
      onConfirm: async () => await handleDeleteTask(taskId),
    });

  useEffect(() => {
    fetchTasks();
  }, [currentPage]);

  return (
    <>
      <Container mt="md">
        <Group justify="space-between" align="center" mb="sm">
          <Text c="dimmed" size="sm">
            {tasks.length > 0
              ? `${tasks.length} task${tasks.length > 1 ? "s" : ""} found`
              : ""}
          </Text>
          <Button
            leftSection={<IconPlus size={18} />}
            onClick={() => handleOpenModal()}
          >
            New Task
          </Button>
        </Group>

        <ScrollArea style={{ height: "calc(100vh - 200px)" }}>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <TaskCard
                key={task?._id}
                task={task}
                onEdit={() => handleOpenModal(task)}
                onDelete={() => openDeleteModal(task._id, task?.title || "")}
              />
            ))
          ) : (
            <Card shadow="sm" padding="md" radius="md" withBorder mb="sm">
              <Text c="dimmed" ta="center">
                No tasks found. Please, create a new one.
              </Text>
            </Card>
          )}
        </ScrollArea>
        <Center>
          <Pagination mt="md" value={currentPage} onChange={setCurrentPage} total={total} />
        </Center>
      </Container>
      <TaskModal
        currentTask={currentTask}
        opened={opened}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </>
  );
}
