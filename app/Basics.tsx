import React, { useEffect } from "react";

function Basics() {
  // useEffect will run after the component renders
  useEffect(() => {
    // Side Effect Logic
    console.log("Basic Structure of UseEffect");

    // Cleanup Function
    return () => {
      console.log("Cleanup Function");
    };
  }, [
    {
      /* Dependency Array  will decide when to run the side effect logic */
    },
  ]);
  // Dependency Array
  // If the dependency array is empty, the side effect logic will only run once when the component mounts
  // If the dependency array is not empty, the side effect logic will run whenever the dependency array changes
  // If the dependency array is not provided, the side effect logic will run whenever the component mounts and updates
  // If the dependency array is provided, the side effect logic will run whenever the dependency array changes
  // If the dependency array is provided, the side effect logic will run whenever the component mounts and updates
  // If the dependency array is provided, the side effect logic will run whenever the component mounts and updates
  return (
    <div>
      <h1>Basics</h1>
    </div>
  );
}

export default Basics;
