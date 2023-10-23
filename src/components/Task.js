import React from 'react';

export const Task = ({ task, deleteTask }) => {
  
    return (
        <div>
           <li>{task.text}</li>
           <button>🗑️</button> 
        </div>
       
    )
}