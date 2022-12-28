import React, { useEffect, useState } from "react";
import { get, values, camelCase } from "lodash";
const Main = () => {
  const [numIncrement, setNumIncrement] = useState(0);

  return (
    <>
      <h2>Counter</h2>
      <div>{numIncrement}</div>
      <button
        value="add"
        onClick={(e) => {
          setNumIncrement(numIncrement + 1);
        }}
      >
        +
      </button>
      <button
        value="subtract"
        onClick={(e) => {
          setNumIncrement(numIncrement - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default Main;
