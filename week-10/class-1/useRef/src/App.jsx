import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null); // useRef should be called here

  function focusOnInput() {
    // Accessing the ref and setting focus
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <div>
        Sign up
        <input ref={inputRef} type="text" />
        <input type="text" />
        <button onClick={focusOnInput}>Submit</button>
      </div>
    </>
  );
}

export default App;
