'use server';

import { revalidatePath } from 'next/cache';

export async function addTask(title: string) {

  try {

    const res = await fetch(`${process.env.API}/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
  
    if (!res.ok) {
      throw new Error('Error creating task');
    }
  
    revalidatePath('/');

  } catch (error) {
    
    throw new Error('Error creating task');
  }
}
