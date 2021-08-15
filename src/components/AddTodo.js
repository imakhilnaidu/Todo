import React, { useState } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function AddTodo(props) {
  const [input, setInput] = useState("");

  // Whenever we type this handle change function will capture the text
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Whenever we click add todo button this handle submit function will fired
  const handleSubmit = (e) => {
    // 👇 This will prevent the refreshing the page when we click add todo button
    e.preventDefault();

    // 👇 This data will passed to TodoList
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    // 👇 After clicking add button it will clear the input field
    setInput("");
  };

  return (
    <div>
      <form className="card">
        <input
          className="inf"
          value={input}
          type="text"
          placeholder="Type here....."
          onChange={handleChange}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          className="btn"
          startIcon={<AddIcon fontSize="large" />}
          type="submit"
          onClick={handleSubmit}
          disabled={!input}
        >
          {props.edit ? "Update" : "Add"}
        </Button>
      </form>
    </div>
  );
}

export default AddTodo;
