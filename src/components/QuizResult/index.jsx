import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultChart from "./ResultChart";

const QuizResult = () => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const result = useSelector((state) => state.results.quizResult);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  useEffect(() => {
    let o = 0;
    let x = 0;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === quiz[i].correct_answer) {
        o++;
      } else {
        x++;
      }
    }
    setCorrect(o);
    setIncorrect(x);
  }, []);
  return (
    <div className="w-4/5 h-4/5 bg-white rounded-xl">
      {correct + incorrect === quiz.length ? (
        <ResultChart correct={correct} incorrect={incorrect} quizNum={quiz.length} />
      ) : null}
    </div>
  );
};

export default QuizResult;
