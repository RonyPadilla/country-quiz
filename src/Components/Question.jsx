// import { useState } from 'react'
import "../Style/question.css";

export const Question = () => {
  const questionDefault = [
    {
      id: 1,
      question: "Kuala Lumpur is the capital of",
      option: ['Vietnam','Malaysia','Sweden','Austria'],
    },
  ];

  return (
    <>
      <section className="question">
        {questionDefault.map((question) => (
          <div className="question-div" key={question.id}>
            <div className="question-h2">
              <h2>{question.question}</h2>
            </div>
            <div className="question-option-div">
              <button className="button-option">
                <div className="div-option">
                  <h2>A</h2>
                </div>
                <h3>{question.option[0]}</h3>
              </button>
              <button className="button-option">
                <div className="div-option">
                  <h2>B</h2>
                </div>
                <h3>{question.option[1]}</h3>
              </button>
              <button className="button-option">
                <div className="div-option">
                  <h2>C</h2>
                </div>
                <h3>{question.option[2]}</h3>
              </button>
              <button className="button-option">
                <div className="div-option">
                  <h2>D</h2>
                </div>
                <h3>{question.option[3]}</h3>
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
