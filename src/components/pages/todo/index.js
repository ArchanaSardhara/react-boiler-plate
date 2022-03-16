import moment from "moment";
import React, { useState } from "react";

import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import TodoCard from "./todoCard";

const Todo = () => {
  const [todoList, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    setTodo([
      ...todoList,
      {
        text: todoText,
        id: moment().toDate().getTime(),
        createdAt: moment().format(),
      },
    ]);
    setTodoText("");
  };

  return (
    <div className="todo-container">
      <h1 className="todo-heading">Todos</h1>
      <div className="todo-section">
        <Form className="todo-form">
          <FormGroup className="todo-form--group" row>
            <Label sm="auto" for="todoText">
              Todo
            </Label>
            <Col>
              <Input
                type="text"
                name="todoText"
                id="todoText"
                placeholder="Type here"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
            </Col>
          </FormGroup>
          <Button className="mx-2" disabled={!todoText} onClick={handleAddTodo}>
            Add Todo
          </Button>
        </Form>
      </div>
      <div className="todo-section">
        <div className="todo-list">
          {todoList.map((todo, index) => (
            <TodoCard key={index} {...todo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
