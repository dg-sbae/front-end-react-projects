import React, { useEffect, useState } from "react";

const Main = () => {
  const [guessedInput, setGuessedInput] = useState("");
  const [answerNum, setAnswerNum] = useState("");
  const [checkMatch, setCheckMatch] = useState("");
  // function to set random numbers to guess
  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // useEffect that sets ansewerNum with randomNumberInRange
  useEffect(() => {
    setAnswerNum(randomNumberInRange(0, 100));
  }, []);
  console.log("answerNum : ", answerNum);

  // function that handles when guessedInput and answerNum is available
  const handleCompareNumbers = (guessedInput, answerNum) => {
    // console.log("handleCompareNumbers.answerNum : ", answerNum);
    if (guessedInput === answerNum) {
      setCheckMatch("true");
    } else {
      setCheckMatch("false");
    }
  };

  return (
    <>
      <h1>Guess the Number</h1>
      <p>Enter a guess between 0 to 100</p>
      <input
        value={guessedInput}
        onChange={(e) => {
          setGuessedInput(Number(e.target.value));
        }}
      />
      <div>
        <button
          onClick={(e) => {
            // when button is clicked,
            // compare guessedInput with answerNum
            handleCompareNumbers(guessedInput, answerNum);
          }}
        >
          Submit
        </button>
        {checkMatch === "true" && guessedInput === answerNum
          ? " you guessed it right! : " + answerNum
          : null}
        {checkMatch === "false" && guessedInput > answerNum
          ? " go lower"
          : null}
        {checkMatch === "false" && guessedInput < answerNum
          ? " go higher"
          : null}
      </div>
    </>
  );
};

export default Main;
