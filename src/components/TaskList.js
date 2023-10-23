import React from 'react';
import { Task } from './Task';

export const TaskList = ({ tasks, setTask }) => {

  const deleteTask = (id) => {
      setTask(tasks.filter((task) => task.id !== id));
    };

    return (
      <ul>
        {
          tasks.map(task => {
           return <Task key={task.id} task={task} deleteTask={deleteTask}/>
          })
        }
      </ul>
    )
};