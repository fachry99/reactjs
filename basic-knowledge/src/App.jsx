/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import { Task } from "./task.jsx";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      Completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const DeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const CompleteTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, Completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              Completed={task.Completed}
              DeleteTask={DeleteTask}
              CompleteTask={CompleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
