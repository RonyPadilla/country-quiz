import "../Style/app.css";
import { useState } from "react";
import { Start } from "./Start";
import { Question } from "./Question";
import { Create } from "./Create";

export const App = () => {
  const [start, setStart] = useState([false, false]);
  const [question, setQuestion] = useState(null);

  return (
    <>
      {start[0] ? (
        start[1] ? (
          <Question questions={question} />
        ) : (
          <Create newQuestion={setQuestion} onNextClick={setStart} />
        )
      ) : (
        <Start onNextClick={setStart} />
      )}
    </>
  );
};
