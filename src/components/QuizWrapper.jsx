import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import QuizMain from "./QuizMain";
import QuizPage from "./QuizPage";

const QuizWrapper = () => {
  const quiz = useSelector((state) => state.quiz.quiz);
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  return (
    <div className="relative w-full max-w-md h-full flex flex-col items-center z-10">
      {quiz ? <QuizPage page={currentQuiz} /> : <QuizMain />}
      <Footer />
    </div>
  );
};

export default QuizWrapper;
