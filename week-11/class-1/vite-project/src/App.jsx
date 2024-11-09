import { useEffect, useState, useRef } from "react";
import "./App.css";
import { useFetch, usePostTitle } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";

// Custom hook for the counter
function useCounter() {
  const [counter, setCounter] = useState(1);
  function increaseCount() {
    setCounter(counter + 1);
  }
  return { count: counter, increaseCount };
}
function useDebounce(originalFn) {
  const currentClock = useRef();
  const fn = () => {
    clearInterval(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  };
  return fn;
}

// Main App component
function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${currentPost}`
  );

  // Use the custom usePrev hook to get the previous state
  const [state, setState] = useState(0);
  const prev = usePrev(state);

  //use debounce
  function sendDataToBackend() {
    fetch("api.anazon.com/search/");
  }
  const debouncedFn = useDebounce(sendDataToBackend);

  return (
    <div>
      <h1>Hello, this is week-11!</h1>

      <div>
        {/* Display the loading message or the fetched data */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>Post Data: {JSON.stringify(finalData)}</p>
        )}

        {/* Buttons to change the current post */}
        <button onClick={() => setCurrentPost(1)}>Post 1</button>
        <button onClick={() => setCurrentPost(2)}>Post 2</button>
        <button onClick={() => setCurrentPost(3)}>Post 3</button>
      </div>

      <div>
        {/* Counter state display and buttons */}
        <p>Current State: {state}</p>
        <button onClick={() => setState((prevState) => prevState + 1)}>
          Increase me
        </button>
        <p>The previous value was: {prev}</p>
      </div>
      <div>
        <input type="text" onChange={debouncedFn}></input>
      </div>
    </div>
  );
}

// Counter component using the useCounter hook
function Counter() {
  const { count, increaseCount } = useCounter();
  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={increaseCount}>Increase me!</button>
    </div>
  );
}

export default App;
