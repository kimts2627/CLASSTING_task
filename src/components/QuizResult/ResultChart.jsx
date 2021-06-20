import Chart from "react-google-charts";

const ResultChart = ({ correct, incorrect, quizNum }) => {
  return (
    <Chart
      width={"200px"}
      height={"200px"}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ["Language", "Speakers (in millions)"],
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
  );
};

export default ResultChart;
