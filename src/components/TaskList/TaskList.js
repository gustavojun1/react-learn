// useState é importado usando chaves (desestruturação) para especificar o nome exato do import
import React, { useState } from "react";
import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const [count, setCount] = useState(0);

  const addTask = () => {
    console.log("função chamada em tasklist");
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return <div key={task.id}>{task.title}</div>;
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
};
