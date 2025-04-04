'use server';

import { revalidatePath } from 'next/cache';

export async function deleteTask(id: string) {

  try {

    const res = await fetch(`${process.env.API}/tasks/${id}`, {
      method: 'DELETE',
    });
  
    if (!res.ok) {
      throw new Error('Error deleting task');
    }
  
    revalidatePath('/');

  } catch (error) {
    
    throw new Error('Error deleting task');
  }
}
