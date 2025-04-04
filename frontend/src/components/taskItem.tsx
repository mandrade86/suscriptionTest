import { toast } from 'sonner';
import { Fragment, useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { Check, MoreVertical, Pencil, Trash2, X } from 'lucide-react';
import { Task } from '@/types/task';
import { updateTask } from '@/actions/updateTask';
import { deleteTask } from '@/actions/deleteTask';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';

interface Props {
  task: Task;
}

export function TaskItem(props: Props) {

  const { task } = props;

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  async function handleCheckedChange(checked: boolean) {
    try {
      await updateTask({ id: task._id, completed: checked });
      setIsEditing(false);
    } catch (err) {
      toast.error('Error updating task');
    }
  }

  async function handleDelete() {
    try {
      await deleteTask(task._id);
    } catch {
      toast.error('Error deleting task');
    }
  }

  async function handleSave() {
    if (title !== task.title && title.length > 0) {
      try {
        await updateTask({ id: task._id, title });
        setIsEditing(false);
      } catch (err) {
        toast.error('Error updating task');
      }
    }
  }

  function handleCancel() {
    setTitle(task.title);
    setIsEditing(false);
  }

  return (
    <li className='flex items-center gap-4 py-3 pl-4 pr-2'>
      {isEditing &&
        <Fragment>
          <Checkbox id={task._id} checked={task.completed} disabled/>
          <Input value={title} onChange={e => setTitle(e.target.value)}/>
          <div className='flex gap-2'>
            <Button variant='outline' size='icon' onClick={handleSave}>
              <Check/>
            </Button>
            <Button variant='outline' size='icon' onClick={handleCancel}>
              <X className='text-red-600'/>
            </Button>
          </div>
        </Fragment>
      }
      {!isEditing &&
        <Fragment>
          <Checkbox 
            id={task._id} 
            checked={task.completed} 
            onCheckedChange={handleCheckedChange}/>
          <Label 
            className={`flex-1 ${task.completed ? 'line-through' : ''}`} 
            htmlFor={task._id}>
            {task.title}
          </Label>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div>
                <Button variant='ghost' size='icon'>
                  <MoreVertical/>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuItem 
                className='gap-3'
                onClick={() => setIsEditing(true)}>
                <Pencil/>
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='gap-3'
                onClick={handleDelete}>
                <Trash2 className='text-red-600'/>
                <span className='text-red-600'>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Fragment>
      }
    </li>
  )
}
