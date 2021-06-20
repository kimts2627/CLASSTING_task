import Chart from "react-google-charts";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { resetResult } from "../../modules/results";
import { resetQuiz } from "../../modules/quiz";

const ResultChart = ({ correct, incorrect, quizNum }) => {
  const [result, setResult] = useState("");

  const dispatch = useDispatch();

  const onResetResult = () => {
    dispatch(resetResult());
  };

  const onResetQuiz = () => {
    dispatch(resetQuiz());
  };

  useEffect(() => {
    if (correct === quizNum) {
      setResult("Perfect!!");
    } else if (correct / quizNum >= 0.5) {
      setResult("Not Bad!");
    } else if (correct !== 0) {
      setResult("Try Again..");
    } else {
      setResult("Fail...");
    }
  }, []);

  const restartQuiz = () => {
    onResetQuiz();
    onResetResult();
  };

  return (
    <>
      <Chart
        width={"350px"}
        height={"350px"}
        chartType="PieChart"
        loader={<Spinner animation="border" />}
        data={[
          ["chart", "number"],
          ["Correct", correct],
          ["Incorrect", incorrect],
        ]}
        options={{
          legend: "none",
          pieSliceText: "label",
          pieStartAngle: 100,
          backgroundColor: "none",
        }}
        rootProps={{ "data-testid": "2" }}
      />
      <article className="w-full h-1/3 flex flex-col items-center justify-between">
        <h1
          className={`text-4xl Kanit ${
            result === "Perfect!!" || result === "Not Bad!" ? "text-green-500" : "text-red-700"
          }`}
        >
          {result}
        </h1>
        <p className="Kanit -mt-20">{`You got ${correct} out of ${quizNum} questions`}</p>
        <button className="w-20 bg-white opacity-70 active:opacity-90 rounded-md" onClick={restartQuiz}>
          Restart
        </button>
      </article>
    </>
  );
};

export default ResultChart;
