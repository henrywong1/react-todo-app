import React, { useState } from 'react';
import './App.css';
import CustomHeader from './components/header';
import FormComponent from './components/form';
import List from './components/task-list';

function App() {
  const [inputText, updateText] = useState('');

  const [tasks, setTasks] = useState([]);


  return (
    <div className="App">
      <div className="center">
        <CustomHeader title='Todo App'></CustomHeader>
      </div>
      <div className="center">
        <FormComponent placeholder="Add a Task" updateText={updateText} inputText={inputText} setTasks={setTasks} tasks={tasks}></FormComponent>
      </div>
      <div className="center">
        <List list={tasks}></List>
      </div>
    </div>
  );
}

export default App;
