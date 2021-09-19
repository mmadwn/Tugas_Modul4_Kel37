import React, { useState, useEffect } from "react";
 
const Form = ({ setNewMessage }) => {
  // the different vars we will need in our local state
 
  const [valueInput, setValueInput] = useState({
    message: "",
    username: "",
  });
 
 
  useEffect(() => {
    if (valueInput.username !== "") {
      alert(`Fitur ini sedang Maintenance!${valueInput.username}`);
    }
  }, [valueInput.username]);
 
  const inputHandler = (event, type) => {
    if (type === "message") {
      setValueInput((prevState) => {
        return { ...prevState, message: event.target.value };
      });
    } else {
      setValueInput((prevState) => {
        return { ...prevState, username: event.target.value };
      });
    }
  };
 
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        id="message"
        value={valueInput.message}
        onChange={(event) => inputHandler(event, "message")}
        autoFocus
        maxLength={25}
        placeholder="Message"
        style={{ marginBottom: "1rem" }}
      />
 
      <input
        type="text"
        id="username"
        value={valueInput.username}
        onChange={(event) => inputHandler(event, "username")}
        maxLength={250}
        placeholder="Username"
      />
    </div>
  );
};
 
export default Form;