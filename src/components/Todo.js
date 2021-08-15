import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddTodo from "./AddTodo";
import "../App.css";

function Todo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  //   Submitting the updated value
  const submitUpdate = (value) => {
    props.updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  //   if edit.id exists then this if block will be executed
  if (edit.id) {
    return <AddTodo edit={edit} onSubmit={submitUpdate} />;
  }

  //   Looping through the todos
  return props.todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => props.completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <EditIcon
          className="edit"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
        <DeleteIcon
          className="delete"
          onClick={() => props.deleteTodo(todo.id)}
        />
      </div>
    </div>
  ));
}

export default Todo;
