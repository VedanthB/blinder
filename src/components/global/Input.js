import React from "react";

function Input({ errorMessage, label, value, onChange }) {
  return (
    <div className="input-container text-black">
      <input
        type="text"
        className="input-outlined input-outlined-cyan"
        autocomplete="off"
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        style={{ backgroundColor: "white" }}
        for="email"
        className="input-label"
      >
        {label}
      </label>

      <small className="error text-red-500 text-sm"> {errorMessage} </small>
    </div>
  );
}

export default Input;
