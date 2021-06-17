import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentQuiz } from "../../modules/quiz";
import SingleQuiz from "./SingleQuiz";

const QuizPage = ({ page }) => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);

  const dispatch = useDispatch();

  const onSetCurrentQuiz = (idx) => {
    dispatch(setCurrentQuiz(idx));
  };

  return (
    <main className="absolute bg-white flex flex-col w-full h-full items-center justify-evenly">
      <SingleQuiz singleQuiz={quiz[currentQuiz]} />
      <button onClick={() => onSetCurrentQuiz(currentQuiz + 1)}>{">"}</button>
    </main>
  );
};

export default QuizPage;
