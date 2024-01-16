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
    return <div onClick={(event) => setIsEditing(true)}>{title}</div>;
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onTaskUpdate: PropTypes.func.isRequired,
};
