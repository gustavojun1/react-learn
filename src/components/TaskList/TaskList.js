// useState é importado usando chaves (desestruturação) para especificar o nome exato do import
import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  listState,
}) {
  const [count, setCount] = useState(0);

  const addTask = () => {
    console.log("função chamada em tasklist");
    onAddTask("Nova Tarefa", listState);
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              state={task.state}
              onTaskUpdate={onTaskUpdate}
            />
          );
        })}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  listState: PropTypes.string.isRequired,
};
