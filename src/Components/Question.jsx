import { useEffect, useState } from "react";
import "../Style/question.css";
// import confetti from "canvas-confetti";

export const Question = () => {
  const [buttonClass, setButtonClass] = useState([]);
  const [buttonClassName, setButtonClassName] = useState("");

  const questionDefault = [
    {
      id: 1,
      question: "Kuala Lumpur is the capital of",
      option: [
        ["Vietnam", false],
        ["Malaysia", true],
        ["Sweden", false],
        ["Austria", false],
      ],
    },
  ];

  useEffect(() => {
    if (buttonClass[0] == true) {
      setButtonClassName("-correct");
    } else {
      setButtonClassName("-incorrect");
    }
  }, [buttonClass]);

  console.log("Hola button inicio " + buttonClass[1]);
  const verify = (val, id) => {
    buttonClass.push(val);
    buttonClass.push(id);
    setButtonClass(buttonClass);
  };

  console.log(questionDefault.map((question) => question.option[0][1]));

  console.log(
    `button-${
      buttonClass[0] == true && buttonClass[0] == 1 ? "correct" : "incorrect"
    }`
  );

  console.log("Hola button " + buttonClass);
  console.log("Hola button " + buttonClassName);

  return (
    <>
      <section className="question">
        {questionDefault.map((question) => (
          <div className="question-div" key={question.id}>
            <div className="question-h2">
              <h2>{question.question}</h2>
            </div>
            <div className="question-option-div">
              <button
                onClick={() => verify(question.option[0][1], 1)}
                className={`button${ buttonClassName }`}
              >
                <div className="div-option">
                  <h2>A</h2>
                </div>
                <h3>{question.option[0][0]}</h3>
              </button>
              <button
                onClick={() => verify(question.option[1][1])}
                className={"button"}
              >
                <div className="div-option">
                  <h2>B</h2>
                </div>
                <h3>{question.option[1][0]}</h3>
              </button>
              <button
                onClick={() => verify(question.option[2][1])}
                className={"button"}
              >
                <div className="div-option">
                  <h2>C</h2>
                </div>
                <h3>{question.option[2][0]}</h3>
              </button>
              <button
                onClick={() => verify(question.option[3][1])}
                className={"button"}
              >
                <div className="div-option">
                  <h2>D</h2>
                </div>
                <h3>{question.option[3][0]}</h3>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
