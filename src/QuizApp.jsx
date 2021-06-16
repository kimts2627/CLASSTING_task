import React from "react";
import QuizWrapper from "./components/QuizWrapper";
import backGround from "./img/background.png";

const QuizApp = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden">
      <img src={backGround} alt="" className="absolute z-0 h-full w-full object-cover opacity-90" />
      <QuizWrapper />
    </div>
  );
};

export default QuizApp;
