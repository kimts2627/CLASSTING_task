import React, { useEffect, useState } from "react";

const SingleQuiz = ({ singleQuiz }) => {
  const { category, difficulty, question, correct_answer, incorrect_answers } = singleQuiz;
  const [list, setList] = useState([]);
  const [selectedAnswer, selectAnswer] = useState("");

  const shuffle = (arr) => {
    let j;
    let x;
    for (let i = arr.length; i; i -= 1) {
      j = Math.floor(Math.random() * i);
      x = arr[i - 1];
      arr[i - 1] = arr[j];
      arr[j] = x;
    }
  };

  const decodeHtmlEntity = (encodedStr) => {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = encodedStr;

    let result = textarea.value;
    return result;
  };

  const chooseAnswer = (e) => {
    selectAnswer(e.currentTarget.textContent);
  };

  useEffect(() => {
    selectAnswer("");
  }, [singleQuiz]);

  useEffect(() => {
    let randomList = [...incorrect_answers, correct_answer];
    shuffle(randomList);
    console.log(randomList);
    setList(randomList);
  }, [singleQuiz]);

  return (
    <div className="w-96 h-96 flex flex-col items-center justify-between">
      <div className="text-lg w-full text-center bg-white opacity-30 rounded-lg flex items-center jusify-center px-5 py-10">
        {decodeHtmlEntity(question)}
      </div>
      <div className="w-full h-40 flex flex-col items-center justify-between list-none text-xl">
        {list.map((answer, idx) => (
          <li
            key={idx}
            onClick={(e) => chooseAnswer(e)}
            className="bg-white opacity-50 w-full flex items-center justify-center rounded-sm cursor-pointer active:opacity-70 py-0.5"
          >
            {decodeHtmlEntity(answer)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
