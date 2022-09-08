import React, { useState } from 'react'

const TaskForms = () => {
    const [task, setTask] = useState({
        title: '',
        description: ''
    })


    const handleChange = e =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(task)
    }
  return (
    <form onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder='title' onChange={handleChange}/>
        <textarea name="description" id="" cols="30" rows="10" placeholder='description' onChange={handleChange}></textarea>
        <button>Save</button>
    </form>
  )
}

export default TaskForms;