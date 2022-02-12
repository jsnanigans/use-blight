import React from "react";
import useBlight from "../lib";

const Form = () => {
  const $ = useBlight({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div>
      <form onSubmit={console.log}>
        <input
          type="text"
          placeholder="Name"
          value={$.name}
          onChange={({ target }) => ($.name = target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={$.email}
          onChange={({ target }) => ($.email = target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Message"
          value={$.message}
          onChange={({ target }) => ($.message = target.value)}
        />
      </form>

      <div>Name: "{$.name}"</div>
      <div>Email: "{$.email}"</div>
      <div>Message: "{$.message}"</div>
    </div>
  );
};

export default Form;
