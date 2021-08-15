import React, { useState, useEffect } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  //   Retrieving data from local storage
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) setTodos(storedTodos);
  }, []);

  // Storing Data in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  // Marking todo as completed
  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  //Deleting todo
  const deleteTodo = (id) => {
    const arr = [...todos].filter((todo) => todo.id !== id);
    setTodos(arr);
  };

  // updating todo
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div>
      <AddTodo onSubmit={addTodo} />
      <div className="todo-list">
        <h4>Tasks to be done - {todos.length}</h4>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default TodoList;
