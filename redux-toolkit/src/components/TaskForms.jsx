import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editTask } from '../features/tasks/taskSlice';
import {v4 as uuid} from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { addTasks, editTasks } from '../services/tasks';

const TaskForms = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const [task, setTask] = React.useState({
        title: '',
        description: ''
    })
    const tasks =  useSelector(state => state.tasks);

    React.useEffect (()=>{
        if(params.id){
            setTask(tasks.find(task => task._id === params.id));
        }
    },[params.id, tasks]); 


    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

/**
 * 
 * If the task has an id, then the task is edited. 
 * If the task does not have an id, then the task is added. 
 * Then navigate to the task list page.
 */
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(params.id){
            dispatch(editTask(task));
            editTasks(task._id, task.description);
        }else{
            dispatch(addTask({
                ...task
                //id: uuid()
            }));
            addTasks(task);
        }
        navigate('/task-list');
    }
    

  return (
    <form onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
        {task 
        ? <div>
            <label htmlFor="title" className='block text-sm font-bold mb-2'>Task:</label>
            <input name="title" type="text" placeholder='title' onChange={handleChange} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
            <label htmlFor="title" className='block text-sm font-bold mb-2'>Description:</label>
            <textarea name="description" id="" cols="30" rows="10" placeholder='description' onChange={handleChange} value={task.description} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
        </div>
        : <></>
        }
        {params.id 
        ? <button className='bg-indigo-600 px-2 py-1 rounded-md'>Edit</button> 
        : <button className='bg-indigo-600 px-2 py-1 rounded-md'>Save</button>
        }
    </form>
  )
}

export default TaskForms;