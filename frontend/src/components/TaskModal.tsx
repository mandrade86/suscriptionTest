"use client";

import {
  Modal,
  Button,
  TextInput,
  Select,
  Switch,
  Group,
  Stack,
  Textarea,
  MultiSelect,
  Slider,
  Text,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { PRIORITY_LABELS, PRIORITY_SLIDER_MARKS, TAGS, TASKS_TYPES } from "../constants/task";
import { Task } from "../types/tasks";
import { useEffect } from "react";

interface TaskModalProps {
  currentTask?: Task
  opened: boolean;
  onClose: () => void;
  onSubmit: (values: Task) => Promise<boolean>;
  loading: boolean;
}

export function TaskModal({ currentTask, opened, onClose, onSubmit, loading }: TaskModalProps) {
  const form = useForm<any>({
    initialValues: {
      title: "",
      type: "",
      deadline: "",
      completed: false,
      priority: 1,
      description: "",
      tags: [],
    },

    validate: {
      title: (value) => (value.trim().length === 0 ? "Title is required" : null),
      type: (value) => (!value ? "Category is required" : null),
      deadline: (value) => (!value ? "Deadline is required" : null),
    },
  });

  const handleSubmit = async (values: Task) => {
    const res = await onSubmit(values);
    
    if(res) {
      form.reset();
      onClose();
    }
  };

  const handleCloseModal = () => {
    onClose();
    form.reset();
  };

  useEffect(() => {
    if (currentTask) {
      form.setValues(currentTask);
    } else {
      form.reset();
    }
  }, [currentTask]);

  return (
    <Modal size="lg" opened={opened} onClose={handleCloseModal} title={currentTask ? "Edit Task" : "Create Task"}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Title"
            placeholder="Enter task title"
            maxLength={40}
            withAsterisk
            {...form.getInputProps("title")}
          />

          <Select
            label="Category"
            placeholder="Select category"
            data={TASKS_TYPES}
            withAsterisk
            comboboxProps={{ withinPortal: false }}
            {...form.getInputProps("type")}
          />
          
          <Box>
            <Text fw={500} size="sm">Priority</Text>
            <Slider
              mb="sm"
              label={(val) => PRIORITY_LABELS[val]}
              min={0}
              max={2}
              step={1}
              marks={PRIORITY_SLIDER_MARKS}
              {...form.getInputProps("priority")}
            />
          </Box>

          <TextInput
            label="Deadline"
            placeholder="YYYY-MM-DD"
            type="date"
            withAsterisk
            min={new Date().toISOString().split("T")[0]} 
            {...form.getInputProps("deadline")}
          />

          <Textarea
            label="Description"
            placeholder="Add task details (optional)"
            minRows={3}
            autosize
            {...form.getInputProps("description")}
          />

          <MultiSelect
            label="Tags"
            placeholder="Add tags (optional)"
            data={TAGS}
            searchable
            comboboxProps={{ withinPortal: false }}
            {...form.getInputProps("tags")}
          />

          <Switch
            label="Completed"
            {...form.getInputProps("completed", { type: "checkbox" })}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="default" onClick={handleCloseModal} type="button">
              Cancel
            </Button>
            <Button
              type="submit"
              loading={loading}
              disabled={!form.isValid()}
            >
              Save
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}
