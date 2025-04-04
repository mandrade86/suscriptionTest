'use server';

import { revalidatePath } from 'next/cache';

interface UpdateTask {
  id: string;
  title?: string;
  completed?: boolean;
}

export async function updateTask(task: UpdateTask) {

  const res = await fetch(`${process.env.API}/tasks/${task.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: task.title,
      completed: task.completed,
      }),
  });

  if (!res.ok) {
    throw new Error('Error updating task');
  }

  revalidatePath('/');
}
