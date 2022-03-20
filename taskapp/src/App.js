import React, { useState } from "react";
import {TaskRow} from './components/TaskRow'

function App() {
  const [userName, setUserName] = useState("franco");
  const [taskItems, setTaskItems] = useState([
    { name: "Task one", done: false },
  ])

  const toggleTask = task =>
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = () => 
    taskItems.map(task => (  
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))
  

  return (
    <div className="App">
      <h1>hellow world</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <body>{taskTableRows()}</body>
      </table>
    </div>
  );
}

export default App;
