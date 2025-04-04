'use server';

export async function fetchTasks() {

  try {

    const res = await fetch('http://localhost:3001/tasks');
  
    return {
      ok: res.ok,
      tasks: await res.json()
    }

  } catch {

    return {
      ok: false
    }
  }
}
