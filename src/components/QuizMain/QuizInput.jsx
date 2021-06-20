import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { API_CATEGORY, API_URI } from "../../lib/constansts";
import { setOptions, setQuiz } from "../../modules/quiz";
import qs from "qs";

const QuizInput = () => {
  const [alertMsg, setMsg] = useState(false);
  const [categories, setCategories] = useState([]);
  const [currentOptions, setCurrentOptions] = useState({
    category: "",
    amount: "",
    difficulty: "",
  });
  const options = useSelector((state) => state.quiz.quizOptions);

  const dispatch = useDispatch();

  const onSetOptions = (newOptions) => {
    dispatch(setOptions(newOptions));
  };

  const onSetQuiz = (quiz) => {
    dispatch(setQuiz(quiz));
  };

  const decodeHtmlEntity = (encodedStr) => {
    let textarea = document.createElement("textarea");
    textarea.innerHTML = encodedStr;

    let result = textarea.value;
    return result;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setCurrentOptions({ ...currentOptions, [name]: value });
  };

  const makeQuiz = async () => {
    if (Object.values(currentOptions).includes("")) {
      setMsg(true);
      return;
    }
    onSetOptions(currentOptions);

    const queries = qs.stringify({
      amount: currentOptions.amount,
      category: currentOptions.category,
      difficulty: currentOptions.difficulty,
      type: "multiple",
    });

    const res = await axios(`${API_URI}?${queries}`);
    const data = res.data.results;
    for (let i of data) {
      i.category = decodeHtmlEntity(i.category);
      i.question = decodeHtmlEntity(i.question);
      i.correct_answer = decodeHtmlEntity(i.correct_answer);
      i.incorrect_answers = i.incorrect_answers.map((answer) => decodeHtmlEntity(answer));
    }
    onSetQuiz(data);
  };

  useEffect(async () => {
    const res = await axios(API_CATEGORY);
    const data = res.data.trivia_categories;
    setCategories(data);
  }, []);

  return (
    <section className="w-full h-96 flex flex-col items-center justify-evenly">
      <label className="text-xl text-white">Quiz Options</label>
      <select name="category" className="w-72 h-8 rounded-md" onChange={(e) => handleChange(e)}>
        <option value="">--Category--</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <select name="amount" className="w-72 h-8 rounded-md" onChange={(e) => handleChange(e)}>
        <option value="">--Amount--</option>
        {["5", "10"].map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
      <select name="difficulty" className="w-72 h-8 rounded-md" onChange={(e) => handleChange(e)}>
        <option value="">--Difficulty--</option>
        {["easy", "medium", "hard"].map((diff) => (
          <option key={diff} value={diff}>
            {diff}
          </option>
        ))}
      </select>
      {alertMsg ? <p className="text-sm text-red-600 absolute bottom-20">please fill all options</p> : null}
      <input
        type="button"
        value="Start Quiz!"
        onClick={makeQuiz}
        className="w-72 h-20 rounded-md text-xl cursor-pointer bg-white shadow-md active:bg-gray-200"
      />
    </section>
  );
};

export default QuizInput;
