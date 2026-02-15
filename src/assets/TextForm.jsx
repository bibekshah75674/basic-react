import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleUpClick = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowClick = ()=>{
    setText(text.toLowerCase());
  }

  const handleClearClick = ()=>{
    setText("");
  }
  return (
    <>
    <div className="container">
      <h1>{props.title}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" cols="80"></textarea>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
      </div>
      </div>

      <div className="container">
        <h2>Your text summary</h2>
        <p>{text.split(" ").filter(word => word !== "").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter(word => word !== "").length} Minutes read</p>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
