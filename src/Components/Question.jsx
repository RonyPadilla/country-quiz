import "../Style/question.css";
// import { Button } from "./Button.jsx";
import { useState } from "react";
import confetti from "canvas-confetti";
import { BsCheckCircle, BsXCircle } from "react-icons/bs";
import { PiCellSignalNoneLight } from "react-icons/pi";

export const Question = ({ questions }) => {

  const [active, setActive] = useState(false);
  const [trueAnswer, setTrueAnswer] = useState(false);
  const [buttonSelect, setButtonSelect] = useState({ id: 0, answer: 0 });
  const [controller, setController] = useState(true)


  const question = [
    {
      id: 1,
      question: "Kuala Lumpur is the capital of",
      option: [
        ["A", "Vietnam", false],
        ["B", "Malaysia", true],
        ["C", "Sweden", false],
        ["D", "Austria", false],
      ],
      url: 'https://th.bing.com/th/id/R.56d49475666a9f8c4c91e4c2daf6e4f2?rik=oCfZi8sMVjCPKQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f9%2f9c%2fBandera_de_Iturbide.png&ehk=P4utKjnCXrSKMs7BBSlreZTvQ8c8KGAeiDnn3J%2fowQE%3d&risl=&pid=ImgRaw&r=0',
    },
  ];

  const handleClick = (id, answer) => {
    if (controller) {
      setActive(!active);
    setButtonSelect({ id: id, answer: answer });
    setTrueAnswer(!trueAnswer)
    if (answer == true) {
      confetti();
    }
    setController(!controller)
    }
    
  };

  console.log(questions)
  console.log(question)

  return (
    <>
      <section className="question">
        <h2 className="h2-question-title">Country quiz</h2>
        <img className="img-question" src="https://github.com/RonyPadilla/country-quiz/blob/main/src/Img/conuntry-quiz-img_.png?raw=true" alt="" />
        {question.map((question) => (
          <div className="question-div" key={question.id}>
            <div>
              <img src=" " alt="" />
            </div>
            <div className="question-h2">
              <h2>{question.question}</h2>
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
                      : question.option[0][2] && trueAnswer == true?"-correct":''
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[0][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[0][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 1) ||  (question.option[0][2] && active)? (
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
                      : question.option[1][2] && trueAnswer == true?"-correct":''
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[1][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[1][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 2) ||  (question.option[1][2] && active) ? (
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
                      : question.option[2][2] && trueAnswer == true?"-correct":''
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[2][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[2][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 3) ||  (question.option[2][2] && active)  ? (
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
                      : question.option[3][2] && trueAnswer == true?"-correct":''
                  }`}
                >
                  <div className="div-option">
                    <h2>{question.option[3][0]}</h2>
                  </div>
                  <div className="h3-question">
                    <h3>{question.option[3][1]}</h3>
                  </div>

                  <div className="div-icon">
                    {(active && buttonSelect.id == 4) ||  (question.option[3][2] && active) ? (
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
            {active?
            <div className="div-button-next">
              <button className="button-next">
                Next
              </button>
            </div>
              
            :''}
          </div>
        ))}
      </section>
    </>
  );
};
