// src/TestComponent.js
import React from "react";

const TestComponent = () => {
  return (
    <div>
      <video title="time video" controls>
        <source src="sample.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default TestComponent;
