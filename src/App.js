import React, { useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';

const App = () => {
    const [tasks, setTask] = useState([])
    const [nextId, setNextId] = useState(tasks.length + 2)
    const addTask = (newTask) => {
      setTask(tasks => [...tasks, newTask])
      setNextId(nextId + 1)
    }
  return (
    <div className="App">
      <Form addTask={addTask} nextId={nextId} />
      <TaskList tasks={tasks} setTask={setTask} addTask={addTask}/>
    </div>
  );
}

export default App;
