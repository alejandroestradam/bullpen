import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {

    const tasks = useSelector(state => state.tasks)
    console.log(tasks)

  return (
    <div>
        <h1>Task List</h1>
        <div>
            {tasks.map (task => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TaskList