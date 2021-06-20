import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuiz } from "../../modules/quiz";
import SingleQuiz from "./SingleQuiz";
import ProgressBar from "./ProgressBar";

const QuizPage = ({ page }) => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  const result = useSelector((state) => state.results.quizResult);

  const dispatch = useDispatch();

  const onSetCurrentQuiz = (idx) => {
    dispatch(setCurrentQuiz(idx));
  };

  const nextQuestion = () => {
    onSetCurrentQuiz(currentQuiz + 1);
  };

  return (
    <main className="absolute flex flex-col w-full h-full items-center justify-evenly">
      <ProgressBar quiz={quiz} />
      <SingleQuiz singleQuiz={quiz[currentQuiz]} />
      {result[currentQuiz] ? (
        <div className="absolute bottom-32">
          <button onClick={nextQuestion}>
            {quiz.length - 1 === currentQuiz ? "Show result" : "Next Question"}
          </button>
        </div>
      ) : null}
    </main>
  );
};

export default QuizPage;
