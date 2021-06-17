import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import QuizMain from "./QuizMain";

const QuizWrapper = () => {
  const [quiz, setQuiz] = useState("");
  useEffect(async () => {
    const quiz = await axios(
      "https://opentdb.com/api.php?amount=3&category=28&difficulty=medium&type=multiple"
    );
    console.log(quiz.data);
  }, []);
  return (
    <div className="relative w-full max-w-md h-full flex flex-col items-center z-10">
      <QuizMain />
      <Footer />
    </div>
  );
};

export default QuizWrapper;
