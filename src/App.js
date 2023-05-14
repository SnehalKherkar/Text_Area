import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(100);
  const [warning, setWarning] = useState(false);
  const [submittedText, setSubmittedText] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setText(value);
    setCount(100 - value.length);
    if (value.length > 90) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedText(text);
    setText("");
    setCount(100);
  };

  return (
    <div> 
      <h1>Enter Your Message Here</h1>
      <form onSubmit={handleSubmit}>
        <textarea className="textarea"
          value={text}
          onChange={handleChange}
          maxLength={100}
          style={{
            borderRadius: "5px",
            padding: "10px",
            fontSize: "16px",
            marginBottom: "10px",
          }}
        />
        <div className="counter">
          Characters remaining only: {count}
          {warning && <span className="warning" style={{ color: "red" }}> Warning: Only 10% remaining!</span>}
        </div>
        <button className="submit" disabled={count < 0} style={{ marginTop: "10px" }}>
          Submit
        </button>
      </form>
      {submittedText && <p>{submittedText}</p>}
    </div>
  );
};

export default App;