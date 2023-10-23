import React from 'react';

export const Task = ({ task, deleteTask }) => {
  
    return (
        <div>
           <li>{task.text}</li>
           <button onClick={() => deleteTask(task.id)}>🗑️</button> 
        </div>
       
    )
}