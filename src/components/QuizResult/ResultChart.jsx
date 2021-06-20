import Chart from "react-google-charts";
import Spinner from "react-bootstrap/Spinner";
import { useEffect, useState } from "react";

const ResultChart = ({ correct, incorrect, quizNum }) => {
  const [result, setResult] = useState("");
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
      <article>
        <h1
          className={`text-xl ${
            result === "Perfect!!" || result === "Not Bad!" ? "text-green-500" : "text-red-700"
          }`}
        >
          {result}
        </h1>
      </article>
    </>
  );
};

export default ResultChart;
