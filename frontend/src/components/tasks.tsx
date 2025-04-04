'use client';

import { Task } from '@/types/task';
import { AddTaskModal } from './addTaskModal';
import { TaskItem } from './taskItem';
import { Toaster } from './ui/sonner';

interface Props {
  tasks: Task[];
}

export function Tasks(props: Props) {

  const { tasks } = props;

  return (
    <div className='h-full overflow-auto'>
      <div className='max-w-2xl p-8 m-auto'>
        <div className='flex items-center justify-between'>
          <h2 className='text-xl font-semibold'>Todo List</h2>
          <AddTaskModal/>
        </div>
        {tasks.length > 0 &&
          <ul className='shadow-sm shadow-gray-300 rounded-sm mt-5'>
            {tasks.map((task) => (
              <TaskItem 
                key={task._id} 
                task={task}/>
            ))}
          </ul>
        }
        {tasks.length === 0 &&
          <div className='text-center text-gray-500 mt-12 text-lg'>
            No tasks found
          </div>
        }
      </div>
      <Toaster 
        position="bottom-left" 
        richColors={true}
        closeButton={true}/>
    </div>
  );
}
