import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState(["gym", "study", "reading"]);
  const [newTask, setNewTask] = useState("");

  function handelInput(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function handelRemove(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveUp(index) {
    if (index === 0) return;

    const updatedTasks = [...tasks];

    [updatedTasks[index - 1], updatedTasks[index]] = [
      updatedTasks[index],
      updatedTasks[index - 1],
    ];
    setTasks(updatedTasks);
  }

  function moveDown(index) {
    if (index === tasks.length - 1) return;

    const updatedTasks = [...tasks];
    [updatedTasks[index], updatedTasks[index + 1]] = [
      updatedTasks[index + 1],
      updatedTasks[index],
    ];
    setTasks(updatedTasks);
  }

  return (
    <div className="to-do-list">
      <h1> to do list </h1>
      <div>
        <input
          type="text"
          placeholder="enter taksks... "
          value={newTask}
          onChange={handelInput}
        />
        <button className="add-butoon" onClick={addTask}>
          add task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task">{task}</span>
            <button
              className="delet-button"
              onClick={() => handelRemove(index)}
            >
              delet
            </button>

            <button className="move-button" onClick={() => moveUp(index)}>
              ☝️
            </button>

            <button className="move-button" onClick={() => moveDown(index)}>
              👎
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
