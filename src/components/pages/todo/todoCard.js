import moment from "moment";
import React from "react";

const TodoCard = (props) => {
  const { id, text, createdAt, updatedAt, cardClick } = props;
  return (
    <div className="todo-card" onClick={() => cardClick(id)}>
      <div className="todo-card--title">{text}</div>
      <div className="todo-card--text">
        Created: {moment(createdAt).format("lll")}
      </div>
      <div className="todo-card--text">
        Updated: {moment(updatedAt).format("lll")}
      </div>
    </div>
  );
};

export default TodoCard;
