import React, { useEffect } from "react";

function GrandChild() {
  useEffect(() => {
    console.log("I am GrandChild");
  }, []);
  return <div>GrandChild</div>;
}

export default GrandChild;
