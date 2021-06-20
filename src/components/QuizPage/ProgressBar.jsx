import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = ({ quiz }) => {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  return (
    <ul className={`absolute top-16 ${quiz.length === 5 ? "w-40" : "w-80"} h-3 flex justify-evenly`}>
      {quiz.map((quiz, idx) => (
        <li
          key={idx}
          className={`h-2 w-6 rounded-sm border-2 ${
            idx === currentQuiz ? "border-purple-600" : idx < currentQuiz ? "bg-purple-600 border-none" : ""
          }`}
        />
      ))}
    </ul>
  );
};

export default ProgressBar;
