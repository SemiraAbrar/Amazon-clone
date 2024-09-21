import React from "react";
import { useColor } from "./ContextProvider";

function ComponentA() {
  const { colorToggler } = useColor();
  return (
    <div>
      <h1>ComponentA</h1>
      <button onClick={colorToggler}>color toggler</button>
      <hr />
    </div>
  );
}

export default ComponentA;
