import React from "react";
import { useEffect } from "react";
import Child from "./Child";

function Parent() {
  useEffect(() => {
    console.log("Parent component mounted");
  }, []);
  return (
    <div>
      I am a parent component
      <Child />
    </div>
  );
}

export default Parent;
