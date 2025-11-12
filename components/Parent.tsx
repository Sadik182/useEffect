import React from "react";
import { useEffect } from "react";
import Child from "./Child";

function Parent() {
  useEffect(() => {
    console.log("I am from Parent Component");
  }, []);
  return (
    <div>
      I am a parent component
      <Child />
    </div>
  );
}

export default Parent;
