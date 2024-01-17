import React, { useState } from "react";
import "./task-item.css";
import PropTypes from "prop-types";

export default function TaskItem({
  id,
  title,
  state,
  onTaskUpdate,
  onTaskDelete,
}) {
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
      if (editableTitle.length == 0) onTaskDelete(id);
    }
  };

  const onTaskStateChange = (e) => {
    onTaskUpdate(id, title, e.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={editableTitle}
          onChange={onTitleChange}
          onKeyDown={onKeyDown}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={() => setIsEditing(true)}>{title}</div>
        <select onChange={onTaskStateChange} value={state}>
          <option value="Pendente">Pendente</option>
          <option value="Em andamento">Em andamento</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};
