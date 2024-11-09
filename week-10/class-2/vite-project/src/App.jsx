import React, { useState, useContext, createContext } from "react";
import "./App.css";

// Context for the bulb state
const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <div>
      <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
        <Light />
      </BulbContext.Provider>
    </div>
  );
}

function Light() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const { bulbOn, setBulbOn } = useContext(BulbContext); // Use the correct context function here
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb on" : "Bulb off"}</div>;
}

function ToggleBulbState({ bulbOn, setBulbOn }) {
  function toggle() {
    setBulbOn((currentState) => !currentState);
  }

  return (
    <div>
      <button onClick={toggle}>Toggle the bulb</button>
    </div>
  );
}

export default App;
