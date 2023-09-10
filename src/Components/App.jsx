import "../Style/app.css";
import { useState } from "react";
import { Start } from "./Start.jsx";
import { Question } from "./Question.jsx";
import { Create } from "./Create.jsx";
import { Win } from "./Win.jsx";

export const App = () => {
  const [start, setStart] = useState([false, false]);
  const [finish, setFinish] = useState(false);
  const [question, setQuestion] = useState([]);
  const [sendCountCorrect, setSendCountCorrect] = useState(0);

  console.log(finish);

  return (
    <>
      {start[0] ? (
        start[1] ? (
          finish ? (
            <Win
              sendWinClick={setStart}
              onWinClick={start}
              finish={setFinish}
              sendCountCorrect={sendCountCorrect}
              setSendCountCorrect={setSendCountCorrect}
            />
          ) : (
            <Question
              sendCountCorrect={setSendCountCorrect}
              valueCountCorrect={sendCountCorrect}
              questions={question}
              finish={setFinish}
            />
          )
        ) : (
          <Create newQuestion={setQuestion} onNextClick={setStart} />
        )
      ) : (
        <Start onNextClick={setStart} />
      )}
    </>
  );
};
