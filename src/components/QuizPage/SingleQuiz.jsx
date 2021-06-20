import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setResult } from "../../modules/results";

const SingleQuiz = ({ singleQuiz }) => {
  const { category, difficulty, question, correct_answer, incorrect_answers } = singleQuiz;
  const [list, setList] = useState([]);
  const result = useSelector((state) => state.results.quizResult);
  const currentQuiz = useSelector((state) => state.quiz.currentQuiz);

  const dispatch = useDispatch();

  const onSetResult = (result) => {
    dispatch(setResult(result));
  };

  const selectResult = (e) => {
    let newResult = [...result];
    if (newResult[currentQuiz] === e.currentTarget.textContent) {
      newResult[currentQuiz] = "";
    } else {
      newResult[currentQuiz] = e.currentTarget.textContent;
    }
    onSetResult(newResult);
  };

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

  useEffect(() => {
    let randomList = [...incorrect_answers, correct_answer];
    shuffle(randomList);
    console.log(randomList);
    setList(randomList);
  }, [singleQuiz]);

  useEffect(() => {
    let answers = document.getElementsByClassName("lists");
    for (let i of answers) {
      if (i.textContent === result[currentQuiz]) {
        i.style.opacity = "0.7";
      } else {
        i.style.opacity = "0.5";
      }
    }
  }, [result]);

  return (
    <div className="w-96 h-96 flex flex-col items-center justify-between">
      <div className="text-lg w-full text-center bg-white opacity-30 rounded-lg flex items-center jusify-center px-5 py-10">
        {decodeHtmlEntity(question)}
      </div>
      <div className="w-full h-40 flex flex-col items-center justify-between list-none text-xl">
        {list.map((answer, idx) => (
          <li
            key={idx}
            onClick={(e) => selectResult(e)}
            className="bg-white opacity-50 w-full flex items-center justify-center rounded-sm cursor-pointer active:opacity-70 py-0.5 transition-all lists"
          >
            {decodeHtmlEntity(answer)}
          </li>
        ))}
      </div>
    </div>
  );
};

export default SingleQuiz;
