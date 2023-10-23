import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';

const App = () => {
    const [tasks, setTask] = useState([])
    const [nextId, setNextId] = useState(tasks.length + 2)
    const addTask = (newTask) => {
      setTask(tasks => [...tasks, newTask])
    }

    const deleteTask = () => {
      setTask(tasks.filter(task => {
        return [...tasks, task]
      }))
    }
  return (
    <div className="App">
      <Form addTask={addTask} nextId={nextId} />
      <TaskList tasks={tasks} setTask={setTask} addTask={addTask} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
