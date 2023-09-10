import "../Style/question.css";
import PropTypes from "prop-types";
import { useState } from "react";
import confetti from "canvas-confetti";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { PiCellSignalNoneLight } from "react-icons/pi";

export const Question = ({
  sendCountCorrect,
  valueCountCorrect,
  questions,
  finish,
}) => {
  const [active, setActive] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [buttonSelect, setButtonSelect] = useState({ id: 0, answer: 0 });
  const [controller, setController] = useState(true);
  const [countQuestions, setCountQuestions] = useState(0);

  const questionsDefault = [
    {
      id: 1,
      question: "Which country does this flag belong to?  ",
      option: [
        ["A", "Vietnam", false],
        ["B", "Finland", true],
        ["C", "Sweden", false],
        ["D", "Austria", false],
      ],
      url: "https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/bandera.png?raw=true",
    },
    {
      id: 2,
      question: "What is the capital of France? ",
      option: [
        ["A", "London", false],
        ["B", "Madrid", false],
        ["C", "Berlin", false],
        ["D", "Paris", true],
      ],
      url: "",
    },
    {
      id: 3,
      question: "Which country is known as the Land of the Rising Sun? ",
      option: [
        ["A", "South Korea", false],
        ["B", "China", false],
        ["C", "Japan", true],
        ["D", "Thailand", false],
      ],
      url: "",
    },
    {
      id: 4,
      question: "What is the official language of Brazil? ",
      option: [
        ["A", "Spanish", false],
        ["B", "Portuguese", true],
        ["C", "French", false],
        ["D", "Italian", false],
      ],
      url: "",
    },
    {
      id: 5,
      question: "Which African country is famous for its pyramids? ",
      option: [
        ["A", "Morocco", false],
        ["B", "Egypt", true],
        ["C", "Nigeria", false],
        ["D", "Kenya", false],
      ],
      url: "",
    },
  ];

  const question =
    questions.length === 0
      ? questionsDefault[countQuestions]
      : questions[countQuestions];

  const handleQuestion = () => {
    setActive(!active);
    setController(!controller);
    setTrueAnswer(!trueAnswer);
    setButtonSelect({ id: 0, answer: 0 });
    setCountQuestions(countQuestions + 1);
  };

  const handleClick = (id, answer) => {
    if (controller) {
      setActive(!active);
      setButtonSelect({ id: id, answer: answer });
      setTrueAnswer(!trueAnswer);
      if (answer == true) {
        sendCountCorrect(valueCountCorrect + 1);
        confetti();
      }
      setController(!controller);
    }
  };

  const handleFinish = () => {
    finish(true);
  };


  return (
    <>
      <section className="question">
        <h2 className="h2-question-title">Country quiz</h2>
        {window.innerWidth > 800 ? <img
          className="img-question"
          src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/conuntry-quiz-img_.png?raw=true"
          alt="" 
        /> : ''}
        {
          <div className={`${question.url === "" ? "question-div-without-img" : "question-div-with-img"}`} key={question.id}>
            {question.url === "" ? (
              ""
            ) : (
              <div className="question-div-img">
                <img className="question-img" src={`${question.url}`} alt="" />
              </div>
            )}

            <div className="div-question-h2">
              <h2 className="question-h2">{question.question}</h2>
            </div>
            <div className="question-option-div">
              <div>
                <button
                  onClick={() => handleClick(1, question.option[0][2])}
                  className={`button${
                    buttonSelect.id == 1
                      ? buttonSelect.answer == true
                        ? "-correct"
                        : "-incorrect"
                      : question.option[0][2] && trueAnswer == true
                      ? "-correct"
                      : ""
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[0][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[0][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 1) ||
                    (question.option[0][2] && active) ? (
                      question.option[0][2] ? (
                        <BsCheckCircle className="icon" />
                      ) : (
                        <BsXCircle className="icon" />
                      )
                    ) : (
                      <PiCellSignalNoneLight />
                    )}
                  </div>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleClick(2, question.option[1][2])}
                  className={`button${
                    buttonSelect.id == 2
                      ? buttonSelect.answer == true
                        ? "-correct"
                        : "-incorrect"
                      : question.option[1][2] && trueAnswer == true
                      ? "-correct"
                      : ""
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[1][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[1][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 2) ||
                    (question.option[1][2] && active) ? (
                      question.option[1][2] ? (
                        <BsCheckCircle className="icon" />
                      ) : (
                        <BsXCircle className="icon" />
                      )
                    ) : (
                      <PiCellSignalNoneLight />
                    )}
                  </div>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleClick(3, question.option[2][2])}
                  className={`button${
                    buttonSelect.id == 3
                      ? buttonSelect.answer == true
                        ? "-correct"
                        : "-incorrect"
                      : question.option[2][2] && trueAnswer == true
                      ? "-correct"
                      : ""
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[2][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[2][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 3) ||
                    (question.option[2][2] && active) ? (
                      question.option[2][2] ? (
                        <BsCheckCircle className="icon" />
                      ) : (
                        <BsXCircle className="icon" />
                      )
                    ) : (
                      <PiCellSignalNoneLight />
                    )}
                  </div>
                </button>
              </div>
              <div>
                <button
                  onClick={() => handleClick(4, question.option[3][2])}
                  className={`button${
                    buttonSelect.id == 4
                      ? buttonSelect.answer == true
                        ? "-correct"
                        : "-incorrect"
                      : question.option[3][2] && trueAnswer == true
                      ? "-correct"
                      : ""
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[3][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[3][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 4) ||
                    (question.option[3][2] && active) ? (
                      question.option[3][2] ? (
                        <BsCheckCircle className="icon" />
                      ) : (
                        <BsXCircle className="icon" />
                      )
                    ) : (
                      <PiCellSignalNoneLight />
                    )}
                  </div>
                </button>
              </div>
            </div>
            {active ? (
              countQuestions < 4 ? (
                <div className="div-button-quiz">
                  <button onClick={handleQuestion} className="button-quiz">
                    Next
                  </button>
                </div>
              ) : (
                <div className="div-button-quiz">
                  <button onClick={handleFinish} className="button-quiz">
                    finish
                  </button>
                </div>
              )
            ) : (
              ""
            )}
          </div>
        }
      </section>
    </>
  );
};

Question.propTypes = {
  sendCountCorrect: PropTypes.func.isRequired,
  valueCountCorrect: PropTypes.number.isRequired,
  finish: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};
