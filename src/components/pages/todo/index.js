import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import TodoCard from "./todoCard";
import TodoModal from "./todoModal";

const Todo = () => {
  const [todoList, setTodo] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [selectedTodo, setSeletedTodo] = useState(null);
  const negivate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const todo = todoList.find(
        (item) => Number(item.id) === Number(params.id)
      );
      if (!todo) negivate("/todo");
      else setSeletedTodo(todo);
    } else {
      setSeletedTodo(null);
    }
  }, [params.id]);

  const handleAddTodo = () => {
    setTodo([
      ...todoList,
      {
        text: todoText,
        id: moment().toDate().getTime(),
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
    ]);
    setTodoText("");
  };

  const handleUpdateTodo = (id, text) => {
    const updatedTodoList = todoList.map((item) =>
      Number(item.id) === Number(id)
        ? {
            ...item,
            text: text,
            updatedAt: moment().format(),
          }
        : item
    );
    setTodo(updatedTodoList);
    setSeletedTodo(null);
    negivate("/todo");
  };

  const redirectToEdit = (id) => {
    negivate(`/todo/${id}`);
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
            <TodoCard key={index} {...todo} cardClick={redirectToEdit} />
          ))}
        </div>
      </div>
      {selectedTodo ? (
        <TodoModal
          selectedTodo={selectedTodo}
          handleSumbit={handleUpdateTodo}
        />
      ) : null}
    </div>
  );
};

export default Todo;
