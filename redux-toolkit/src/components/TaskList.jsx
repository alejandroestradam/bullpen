import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, getAll } from '../features/tasks/taskSlice';
import { Link } from 'react-router-dom';
import { deleteTasks, getTasks } from '../services/tasks';


const TaskList = () => {
    const dispatch = useDispatch();

    /* Using the useSelector hook to get the tasks from the state. */
    const tasks = useSelector(state => state.tasks)
    
/**
 * The function takes in an id, dispatches the deleteTask action, and then calls the deleteTasks
 * function
 */
    const handleDelete = (id) =>{
        dispatch(deleteTask(id));
        deleteTasks(id);
    }




  return (
    <div className='w-4/6'>
        <header className='flex justify-between items-center py-4'>
            <h1 className='text-xl'>Tasks: {tasks.length}</h1>
            <Link to={'/create-task'} className='bg-indigo-600 px-2 py-1 rounded-sm text-sm'>Create task</Link>
        </header>
        <div className='grid grid-cols-3 gap-4 '>
            {tasks.length > 0 
            ? tasks.map (task => (
                <div key={task._id} className='bg-neutral-700 p-4 rounded-sm'>
                    <header className='flex justify-between'>
                    <h2 className='text-lg'>Task</h2>
                    <div className="flex gap-x-2">
                        <button onClick={()=> handleDelete(task._id)} className='bg-red-500 px-2 py-1 text-xs rounded-md'>Delete</button>
                        <Link to={`/edit-task/${task._id}`} className='bg-zinc-600 px-2 py-1 text-xs rounded-md'>Edit Task</Link>
                    </div>
                    </header>
                    <p className='text-sm'>{task.description}</p>
                </div>
            ))
            : <div></div>
        }
        </div>
    </div>
  )
}

export default TaskList




