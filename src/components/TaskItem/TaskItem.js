import React, { useState } from "react";
import "./task-item.css";
import PropTypes from "prop-types";

export default function TaskItem({ id, title, state, onTaskUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(title);

  const onTitleChange = (e) => {
    const newTitle = e.target.value;
    setEditableTitle(newTitle);
    onTaskUpdate(id, newTitle, state);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  const onTaskStateChange  = (e) => {
    onTaskUpdate(id, title, e.target.value);
  }

  if (isEditing) {
    return (
      <input
        type="text"
        value={editableTitle}
        onChange={onTitleChange}
        onKeyDown={onKeyDown}
      />
    );
  } else {
    return (
      <div>
        <div onClick={(event) => setIsEditing(true)}>{title}</div>
        <select onChange={onTaskStateChange} value={state}>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Completa">Completa</option>
        </select>
      </div>);
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
