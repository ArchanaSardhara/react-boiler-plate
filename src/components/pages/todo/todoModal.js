import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const TodoModal = (props) => {
  const { selectedTodo, handleSumbit } = props;
  const { id, text } = selectedTodo;
  const [todoText, setTodoText] = useState(text);
  const negivate = useNavigate();

  const handleCancel = () => {
    negivate("/todo");
  };

  return (
    <Modal
      isOpen={selectedTodo.id ? true : false}
      toggle={handleCancel}
      centered
    >
      <ModalHeader toggle={handleCancel}>Edit Todo</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup row>
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
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button
          color="success"
          className="mx-2"
          disabled={todoText === selectedTodo.text}
          onClick={() => handleSumbit(id, todoText)}
        >
          Update Todo
        </Button>
        <Button className="mx-2" onClick={handleCancel}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default TodoModal;
