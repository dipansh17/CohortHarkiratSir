import "./App.css";
import { useEffect, useState } from "react";
//conditional rendering
function App() {
  let [counterVisible, setCountVisible] = useState(true);

  useEffect(function () {
    let clock = setInterval(function () {
      setCountVisible((counterVisible) => !counterVisible);
    }, 5000);
    //after unmount
    return function () {
      console.log("unmounted");
      clearInterval(clock);
    };
  }, []);

  const [count, setCount] = useState(0);
  function increase() {
    setCount((c) => c + 1);
  }
  return (
    <div>
      {/* {counterVisible && <Counter />} */}
      <b>hi There</b>
      <Count count={count} />
      <button onClick={increase}>Increase Count</button>
      afterCounter
    </div>
  );
}
function Count(props) {
  useEffect(
    function () {
      console.log("mount");
      return function () {
        console.log("unmount");
      };
    },
    [props.count]
  );
  return <div>Counter {props.count}</div>;
}
//mounting,re-rendereing,unmounting
//to escape from this situabtion we use useeffect hook
function Counter() {
  const [count, setCount] = useState(0);
  function increaseCounter() {
    setCount(count + 1);
  }
  function decreaseCounter() {
    setCount(count - 1);
  }
  function resetCounter() {
    setCount(0);
  }

  console.log("inside count function");
  // hooking into the lifecycle of react
  //guard out set interval from re-renders
  useEffect(function () {
    let clock = setInterval(function () {
      // setCount((count) => count + 1); //or
      setCount(function (count) {
        return count + 1;
      });
    }, 1000);
    //after unmount only if dependency arra is empty
    return function () {
      console.log("unmounted");
      clearInterval(clock);
    };
  }, []);
  //cleanup and dependecy arr
  return (
    <div>
      <h1>{count}</h1>
      {/* <button onClick={increaseCounter}>Increase Count</button>
      <button onClick={decreaseCounter}>Decrease Count</button>
      <button onClick={resetCounter}>Reset Count</button> */}
    </div>
  );
}

export default App;
