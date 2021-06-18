import React from "react";
import { useSelector } from "react-redux";

const ProgressBar = ({ quiz }) => {
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);
  return (
    <ul
      className={`absolute top-10 ${quiz.length === 5 ? "w-40" : "w-80"} h-3 bg-red-100 flex justify-evenly`}
    >
      {quiz.map((quiz, idx) => (
        <li
          className={`rounded-full w-3 h-3 bg-red-600 border-yellow-500 ${
            idx === currentQuiz ? "border-2" : ""
          }`}
        />
      ))}
    </ul>
  );
};

export default ProgressBar;
