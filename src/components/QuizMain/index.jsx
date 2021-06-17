import React from "react";
import QuizInput from "./QuizInput";
import QuizTitle from "./QuizTitle";

const QuizMain = () => {
  return (
    <main className="absolute flex flex-col w-full h-full items-center justify-evenly">
      <QuizTitle />
      <QuizInput />
    </main>
  );
};

export default QuizMain;
