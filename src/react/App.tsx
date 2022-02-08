import React from "react";
import Button from "./Button";
import Form from "./Form";
import Todo from "./Todo";

const App = () => {
  return (
    <>
      <h2>Increment Button</h2>
      <Button />
      <hr />
      <h2>Form</h2>
      <Form />
      <hr />
      <Todo />
    </>
  );
};

export default App;
