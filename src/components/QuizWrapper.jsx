import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import QuizMain from "./QuizMain";
import QuizPage from "./QuizPage";
import QuizResult from "./QuizResult";

const QuizWrapper = () => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  if (quiz) {
    if (quiz.length === currentQuiz) {
      return (
        <div className="relative w-full max-w-md h-full flex flex-col items-center z-10">
          <QuizResult />
          <Footer />
        </div>
      );
    }

    return (
      <div className="relative w-full max-w-md h-full flex flex-col items-center z-10">
        <QuizPage page={quiz[currentQuiz]} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-md h-full flex flex-col items-center z-10">
      <QuizMain />
      <Footer />
    </div>
  );
};

export default QuizWrapper;
