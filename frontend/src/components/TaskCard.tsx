"use client";

import {
  Card,
  Group,
  Text,
  Badge,
  Stack,
  ActionIcon,
  Title,
  Menu,
  Grid,
} from "@mantine/core";
import { IconDots, IconPencil, IconTrash } from "@tabler/icons-react";
import { Task } from "../types/tasks";
import { PRIORITY_SLIDER_MARKS } from "../constants/task";

interface TaskProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete?: (id?: string) => void;
}

export default function TaskCard({ task, onEdit, onDelete }: TaskProps) {
  return (
    <Card shadow="sm" padding="md" radius="md" withBorder mb="sm">
      <Grid align="flex-start">
        <Grid.Col span={11}>
          <Stack gap={8}>
            <Title order={3} style={{ wordBreak: "break-word" }}>
              {task.title}
            </Title>

            <Group>
              <Badge size="md" color={task.completed ? "green" : "red"}>
                {task.completed ? "Completed" : "Pending"}
              </Badge>
              <Badge
                size="md"
                color={
                  task.priority === 2
                    ? "red"
                    : task.priority === 1
                    ? "yellow"
                    : "green"
                }
              >
                {
                  PRIORITY_SLIDER_MARKS.find(
                    (sm: any) => sm.value === task.priority
                  )?.label
                }
              </Badge>
            </Group>

            <Text size="md" c="dimmed">
              {task.type}
            </Text>
            <Text style={{ wordBreak: "break-word" }} size="sm" c="dimmed">
              Deadline: {new Date(task.deadline).toLocaleDateString("en-US")}
            </Text>

            {task.description && (
              <Text size="sm" mt={4}>
                {task.description}
              </Text>
            )}

            {task.tags && task.tags.length > 0 && (
              <Group gap="xs" mt={4}>
                {task.tags.map((tag) => (
                  <Badge key={tag} variant="light" color="gray">
                    {tag}
                  </Badge>
                ))}
              </Group>
            )}
          </Stack>
        </Grid.Col>

        <Grid.Col span={1} style={{ display: "flex", justifyContent: "flex-end" }}>
          <Menu position="bottom-end" withinPortal>
            <Menu.Target>
              <ActionIcon color="dark" variant="transparent">
                <IconDots />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item
                onClick={() => onEdit(task)}
                color="blue"
                leftSection={<IconPencil stroke={1.8} />}
              >
                Edit
              </Menu.Item>
              <Menu.Item
                onClick={() => onDelete?.(task._id)}
                color="red"
                leftSection={<IconTrash stroke={1.8} />}
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
