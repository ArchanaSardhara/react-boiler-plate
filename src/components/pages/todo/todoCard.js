import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

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

TodoCard.defaultProps = {
  text: "",
  createdAt: "",
  updatedAt: "",
  updatedAt: "",
  cardClick: () => {},
};

TodoCard.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string,
  cardClick: PropTypes.func,
};

export default TodoCard;
