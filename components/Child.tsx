import React from "react";
import { useEffect } from "react";
import GrandChild from "./GrandChild";

function Child() {
  useEffect(() => {
    console.log("I am Child");
  }, []);
  return (
    <div>
      I am a child component
      <GrandChild />
    </div>
  );
}

export default Child;
