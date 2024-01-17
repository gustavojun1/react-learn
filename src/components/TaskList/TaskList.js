// useState é importado usando chaves (desestruturação) para especificar o nome exato do import
import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({
  title,
  onAddTask,
  tasks,
  onTaskUpdate,
  listState,
  onTaskDelete,
}) {
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
              onTaskDelete={onTaskDelete}
            />
          );
        })}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
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
  onTaskDelete: PropTypes.func.isRequired,
};
