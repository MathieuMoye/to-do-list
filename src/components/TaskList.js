import React from 'react';
import { Task } from './Task';

export const TaskList = ({ tasks, setTasks, addTask, deleteTask }) => {
    return (
      <ul>
        {
          tasks.map(task => {
           return <Task task={task} deleteTask={deleteTask}/>
          })
        }
      </ul>
    )
}