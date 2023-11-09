import React from 'react';
import '../styles/Task.css'

export const Task = ({ task, deleteTask }) => {
    return (
        <div className='task-container'>
           <input className='task-input' type='checkbox'/>
           <li className='task-list'>{task.text}</li>
           <button className='task-button' onClick={() => deleteTask(task.id)}>❌</button> 
        </div>
       
    )
}