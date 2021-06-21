import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import ResultChart from "./ResultChart";
import Spinner from "react-bootstrap/Spinner";
import Timer from "../QuizPage/Timer";

const QuizResult = () => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const result = useSelector((state) => state.results.quizResult);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const wrapRef = useRef();

  useEffect(() => {
    wrapRef.current.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  }, []);

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
    <section className="w-4/5 h-4/5 mt-20 rounded-xl flex flex-col items-center justify-evenly" ref={wrapRef}>
      {correct + incorrect === quiz.length ? (
        <>
          <Timer status="resultpage" />
          <ResultChart correct={correct} incorrect={incorrect} quizNum={quiz.length} />
        </>
      ) : (
        <Spinner animation="border" />
      )}
    </section>
  );
};

export default QuizResult;
