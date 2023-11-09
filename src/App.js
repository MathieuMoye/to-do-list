import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Form } from './components/Form';
import { TaskList } from './components/TaskList';
import { Header } from './components/Header';

const App = () => {
    const savedTasks = localStorage.getItem('tasks')
    const [tasks, setTask] = useState(savedTasks ? JSON.parse(savedTasks) : [])
    const [nextId, setNextId] = useState(tasks.length + 2)
    const [toggle, setToggle] = useState('light')
    const addTask = (newTask) => {
      setTask(tasks => [...tasks, newTask])
      setNextId(nextId + 1)

    }
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks))
   }, [tasks])

    const appStyle = toggle ? 'App dark-mode' : 'App'
  return (
    <div className={appStyle}>
      <Header toggle={toggle} setToggle={setToggle}/>
      <Form addTask={addTask} nextId={nextId} />
      <TaskList tasks={tasks} setTask={setTask} addTask={addTask}/>
    </div>
  );
}

export default App;
