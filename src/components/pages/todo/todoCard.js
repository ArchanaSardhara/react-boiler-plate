import moment from "moment";
import React from "react";

const TodoCard = (props) => {
  const { text, createdAt } = props;
  return (
    <div className="todo-card">
      <div className="todo-card--title">{text}</div>
      <div className="todo-card--text">{moment(createdAt).format("lll")}</div>
    </div>
  );
};

export default TodoCard;
