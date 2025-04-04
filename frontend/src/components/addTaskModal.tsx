import { useState } from 'react';
import { addTask } from '@/actions/addTask';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export function AddTaskModal() {

  const [title, setTitle] = useState('');
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);

  async function handleSave() {
    try {
      setIsLoading(true);
      setShowError(false);
      await addTask(title)
      setIsLoading(false);
      handleClose();
    } catch {
      setIsLoading(false);
      setShowError(true);
    }
  }

  function handleOpenChange(open: boolean) {
    setOpen(open);
    if (!open) {
      handleClose();
    }
  }

  function handleClose() {
    setTitle('');
    setOpen(false);
    setShowError(false);
    setIsLoading(false);
  }

  return (
    <Dialog
      open={open}
      onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size='sm'>Add</Button>
      </DialogTrigger>
      <DialogContent className='w-80'>
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
        </DialogHeader>
        <div className='flex flex-col gap-4 py-4'>
          <Label htmlFor='name'>Title</Label>
          <Input
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </div>
        {showError &&  
          <div 
            className='text-red-700 font-medium'>
            Error adding task
          </div>
        }
        <Button
          className='w-min ml-auto'
          disabled={title.length === 0 || isLoading}
          onClick={handleSave}>
          Save
        </Button>
      </DialogContent>
    </Dialog>
  )
}
