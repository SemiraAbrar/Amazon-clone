import React from "react";
import { useColor } from "./ContextProvider";
import "./style.css";
function ComponentB() {
  const { color } = useColor();
  return (
    <div className={color}>
      <h1>component B</h1>
      <h1>color is {color}</h1>
    </div>
  );
}

export default ComponentB;
