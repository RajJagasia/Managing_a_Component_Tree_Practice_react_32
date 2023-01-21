import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input
        onChange={(event) => props.changeHandle(event)}
        type="text"
        value={props.text}
      />
      <button onClick={() => props.itemAdd()}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
