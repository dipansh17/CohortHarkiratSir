import { useState } from "react";
import "./App.css";
import { atom, RecoilRoot, useRecoilValue } from "recoil";
import { counterAtom } from "./store/atoms/counter";
function App() {
  // const [count, setCount] = useState(0); replace with atom

  // const counter = atom({
  //   key: "counter", // key should be unique
  //   default: 0, // it is the inital state
  // });

  function Increase({ setCount }) {
    function inc() {
      setCount((c) => c + 1);
    }
    return (
      <div>
        <button onClick={inc}>Increase</button>
      </div>
    );
  }
  function Decrease({ setCount }) {
    function dec() {
      setCount((c) => c - 1);
    }
    return (
      <div>
        <button onClick={dec}>Decrease</button>
      </div>
    );
  }
  function CurentCount({ count }) {
    // return (
    //   <div>
    //     <p style={{ marginLeft: 10, marginRight: 10 }}>{count}</p>
    //   </div>
    // );

    //using atom
    const count = useRecoilValue(counterAtom);
    return <div>{count}</div>;
  }
  function Counter() {
    return (
      <div>
        <div>
          <h2>key concepts</h2>
          <ol style={{ display: "flex", gap: 15 }}>
            <li>Atom</li>
            <br />
            <li>Selector</li>
          </ol>
        </div>
      </div>
    );
  }
  return (
    <RecoilRoot>
      <div>
        {/* 
        <div style={{ display: "flex" }}>
          <Increase setCount={setCount} />
          <CurentCount count={count} />
          <Decrease setCount={setCount} />
        </div> */}

        <Counter />
      </div>
    </RecoilRoot>
  );
}

export default App;
