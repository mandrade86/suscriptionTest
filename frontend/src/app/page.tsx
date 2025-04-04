import { fetchTasks } from '@/actions/fetchTask';
import { Tasks } from '@/components/tasks';

export default async function Home() {

  const tasks = await fetchTasks();

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex items-center h-16 px-4 shadow-sm'>
        <h1 className='text-2xl font-semibold'>Suscription Test</h1>
      </div>
      <div className='flex-1 overflow-hidden'>
        {tasks.ok &&
          <Tasks tasks={tasks.tasks}/>
        }
        {!tasks.ok &&
          <div className='text-center text-gray-500 mt-12 text-lg'>
            Oops! An error happened
          </div>
        }
      </div>
    </div>
  );
}
