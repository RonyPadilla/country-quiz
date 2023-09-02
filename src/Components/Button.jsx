import "../Style/button.css";
import { useState } from "react";
import confetti from "canvas-confetti";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { PiCellSignalNoneLight } from "react-icons/pi";

export const Button = ({ id, letter, question, answer, className, sendValue }) => {
  const [active, setActive] = useState(false);

  console.log("this is a id " + id);
  const handleClick = () => {

    setActive(!active);
    console.log(active)
    const val = active

    sendValue(val)
    if (answer == true) {
      confetti();
    }
  };

  const style = answer ? "-correct" : "-incorrect";
  const classNameChange = active ? style : "";
  console.log(active ? style + (id === 3 ? "-correct" : "") : "");
  return (
    <>
      <button onClick={handleClick} className={`button${classNameChange}`}>
        <div className="div-option">
          <h2>{letter}</h2>
        </div>
        <div className="h3-question">
          <h3>{question}</h3>
        </div>

        <div className="div-icon">
          {active ? (
            answer ? (
              <BsCheckCircle className="icon" />
            ) : (
              <BsXCircle className="icon" />
            )
          ) : (
            <PiCellSignalNoneLight />
          )}
        </div>
      </button>
    </>
  );
};
