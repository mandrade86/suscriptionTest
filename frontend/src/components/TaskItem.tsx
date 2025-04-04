import { Task } from '../types/task.types';
import { Menu } from '@headlessui/react';
import { EllipsisVerticalIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string, completed: boolean) => void;
  onEdit: (id: string, title: string) => void;
  onDelete: (id: string) => void;
}

export const TaskItem = ({
  task,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskItemProps) => {
  const handleEdit = () => {
    const newTitle = prompt('Edit task:', task.title);
    if (newTitle && newTitle.trim()) {
      onEdit(task._id, newTitle.trim());
    }
  };

  return (
    <li className="group flex items-center justify-between py-3 px-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-3 flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleComplete(task._id, !task.completed)}
          className="h-5 w-5 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        <div className="flex-1">
          <span className={`block ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {task.title}
          </span>
          {task.completedOn && (
            <span className="text-xs text-gray-500">
              Completed: {new Date(task.completedOn).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>

      <Menu as="div" className="relative">
        <Menu.Button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500">
          <EllipsisVerticalIcon className="h-5 w-5 text-gray-500" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={handleEdit}
                className={`${
                  active ? 'bg-gray-100' : ''
                } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
              >
                <PencilIcon className="mr-3 h-5 w-5 text-gray-500" />
                Edit
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => onDelete(task._id)}
                className={`${
                  active ? 'bg-gray-100' : ''
                } flex w-full items-center px-4 py-2 text-sm text-red-700`}
              >
                <TrashIcon className="mr-3 h-5 w-5 text-red-500" />
                Delete
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </li>
  );
}; 