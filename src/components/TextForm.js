import React, { useState } from "react";

export default function TextForm(props) {
  // const countWords=(str)=>{
  //   let count=0
  //   let arr = str.split("/[ ]:/")
  //   for(let i=0;i<arr.length;i++){
  //     count++
  //   }
  //   return count-1
  // }

  const handleUpClick = () => {
    // console.log('uppercase was clicked'+ text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success")
  };
  const handleLowerClick = () => {
    let newText2 = text.toLowerCase();
    setText(newText2);
    props.showAlert("Converted to Lowercase", "success")
  };
  const handleClearClick = () => {
    let newText2 = "";
    setText(newText2);
    props.showAlert("text cleared", "success")
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/); //regex concept
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success")
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied text", "success")
  };
  const handleCapitalClick = () => {
    const arr = text.split(" ");

    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const str = arr.join(" ");
    setText(str);
    props.showAlert("Capitalized", "success")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text = "new text"  //wrong way to set the text
  // setText('new text')   //right way to set the text

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#00030e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCapitalClick}>
          Capitalize
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
          Remove extra spaces
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length-1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length}s reading time</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter your text to preview"}</p>
      </div>
    </>
  );
}
