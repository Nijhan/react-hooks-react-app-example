// src/App.js
import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

const App = () => {
  return (
    <div>
      <h1>Now</h1> {/* This MUST be "Now" only */}
      <ExampleComponent />
      <TestComponent />
    </div>
  );
};

export default App;
