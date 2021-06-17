import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setOptions, setQuiz } from "../../modules/quiz";

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
    const res = await axios(
      `https://opentdb.com/api.php?amount=${currentOptions.amount}&category=${currentOptions.category}&difficulty=${currentOptions.difficulty}&type=multiple`
    );
    const data = res.data.results;
    onSetQuiz(data);
  };

  useEffect(async () => {
    const res = await axios("https://opentdb.com/api_category.php");
    const data = res.data.trivia_categories;
    setCategories(data);
  }, []);

  return (
    <section className="bg-white w-full h-96">
      <form className="flex flex-col items-center jutify-evenly">
        <label>Quiz Options</label>
        <select name="category" className="w-44 border" onChange={(e) => handleChange(e)}>
          <option value="">--Category--</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select name="amount" className="w-44 border" onChange={(e) => handleChange(e)}>
          <option value="">--Amount--</option>
          {["5", "10"].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <select name="difficulty" className="w-44 border" onChange={(e) => handleChange(e)}>
          <option value="">--Difficulty--</option>
          {["easy", "medium", "hard"].map((diff) => (
            <option key={diff} value={diff}>
              {diff}
            </option>
          ))}
        </select>
        {alertMsg ? <p className="text-xs text-red-500">please fill all options</p> : null}
        <input type="button" value="Start Quiz!" onClick={makeQuiz} />
      </form>
    </section>
  );
};

export default QuizInput;
