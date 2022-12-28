import React, { useState } from "react";

const Main = () => {
  const [telephoneInput, setTelephoneInput] = useState("");

  return (
    <>
      <h1>Telephone Formatter</h1>
      <div>
        <input
          value={telephoneInput}
          onChange={(e) => {
            setTelephoneInput(e.target.value.replace(/\D/g, ""));
          }}
        />
      </div>
      <div>
        <button>submit</button>
      </div>
      <div>
        <span>{}</span>
      </div>
      <div>
        <span>+(123) - 4567890</span>
      </div>
    </>
  );
};

export default Main;
