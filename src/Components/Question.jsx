import "../Style/question.css";
import { Button } from "./Button.jsx";
import { useState } from "react";

export const Question = () => {

  const questionDefault = [
    {
      id: 1,
      question: "Kuala Lumpur is the capital of",
      option: [
        ['A',"Vietnam", false],
        ['B',"Malaysia", true],
        ['C',"Sweden", false],
        ['D',"Austria", false],
      ],
    },
  ];

  console.log(questionDefault.map((question) => {
    return question.option[0][1]
  }))




  const [valorDesdeHijo, setValorDesdeHijo] = useState(false);

  // Función para recibir el valor del componente hijo
  const receiveValue = (valor) => {
    setValorDesdeHijo(valor);
  };
  console.log(receiveValue)
  return (
    <>
      <section className="question">
        {questionDefault.map((question) => (
          <div className="question-div" key={question.id}>
            <div className="question-h2">
              <h2 >{question.question}</h2>
            </div>
            <div className="question-option-div">
              <Button 
              id={1}
              letter={question.option[0][0]}
              question={question.option[0][1]}
              answer={question.option[0][2]}
              />
              <Button 
              id={2}
              letter={question.option[1][0]}
              question={question.option[1][1]}
              answer={question.option[1][2]}
              
              />
              <Button 
              id={3}
              letter={question.option[2][0]}
              question={question.option[2][1]}
              answer={question.option[2][2]}
              className={'-correct'}
              sendValue={receiveValue}
              />
              <Button 
              id={4}
              letter={question.option[3][0]}
              question={question.option[3][1]}
              answer={question.option[3][2]}
              />
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
