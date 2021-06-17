import React, { useEffect, useState } from "react";

const SingleQuiz = ({ singleQuiz }) => {
  const { category, difficulty, question, correct_answer, incorrect_answers } = singleQuiz;
  const [list, setList] = useState([]);
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

  useEffect(() => {
    let randomList = [...incorrect_answers, correct_answer];
    shuffle(randomList);
    console.log(randomList);
    setList(randomList);
  }, [singleQuiz]);

  return (
    <div>
      <h1>{question}</h1>
      {list.map((answer, idx) => (
        <li key={idx}>{answer}</li>
      ))}
    </div>
  );
};

export default SingleQuiz;
