import axios from "axios";
import React, { useEffect, useState } from "react";

const QuizInput = () => {
  const [categories, setCategories] = useState([]);
  const [quizNum, setQuizNum] = useState(["5", "10"]);
  const [difficulty, setDiffculty] = useState(["easy", "medium", "hard"]);

  useEffect(async () => {
    const res = await axios("https://opentdb.com/api_category.php");
    const data = res.data.trivia_categories;
    console.table(data);
    setCategories(data);
  }, []);

  return (
    <section className="bg-white w-full h-96">
      <form className="flex flex-col">
        <label>Quiz Options</label>
        <select name="category" className="w-44 border">
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <select name="amount" className="w-44 border">
          {quizNum.map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <select name="difficulty" className="w-44 border">
          {difficulty.map((diff) => (
            <option key={diff} value={diff}>
              {diff}
            </option>
          ))}
        </select>
        <input type="button" value="Start Quiz!" />
      </form>
    </section>
  );
};

export default QuizInput;
