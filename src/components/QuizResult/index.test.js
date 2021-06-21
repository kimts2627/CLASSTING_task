import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import QuizResult from "./index";
import ResultChart from "./ResultChart";
import { store } from "../../index";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });
let component = null;

describe("QuizResult", () => {
  describe("QuizResult", () => {
    it("컴포넌트가 정상적으로 렌더링 되어야 함", () => {
      component = mount(
        <Provider store={store}>
          <QuizResult />
        </Provider>
      );
      expect(component.length).toBe(1);
    });
  });

  describe("ResultChart", () => {
    it("컴포넌트가 정상적으로 렌더링 되어야 함", () => {
      component = mount(
        <Provider store={store}>
          <ResultChart correct={3} incorrect={7} quizNum={10} />
        </Provider>
      );
      expect(component.length).toBe(1);
    });

    it("10개중 10개를 맞췄을 경우 h1 tag에 Perfect!!를 프린트 해야 함", () => {
      component = mount(
        <Provider store={store}>
          <ResultChart correct={10} incorrect={0} quizNum={10} />
        </Provider>
      );
      let resultText = component.find("h1").text();
      expect(resultText).toEqual("Perfect!!");
    });

    it("10개중 0개를 맞췄을 경우 h1 tag에 Fail...을 프린트 해야 함", () => {
      component = mount(
        <Provider store={store}>
          <ResultChart correct={0} incorrect={10} quizNum={10} />
        </Provider>
      );
      let resultText = component.find("h1").text();
      expect(resultText).toEqual("Fail...");
    });

    it("5개중 3개를 맞췄을 경우 h1 tag에 Not Bad!를 프린트 해야 함", () => {
      component = mount(
        <Provider store={store}>
          <ResultChart correct={3} incorrect={2} quizNum={5} />
        </Provider>
      );
      let resultText = component.find("h1").text();
      expect(resultText).toEqual("Not Bad!");
    });

    it("5개중 3개를 맞췄을 경우 p tag에 결과를 프린트 해야 함", () => {
      component = mount(
        <Provider store={store}>
          <ResultChart correct={3} incorrect={2} quizNum={5} />
        </Provider>
      );
      let resultText = component.find("p").text();
      expect(resultText).toEqual("You got 3 out of 5 questions");
    });
  });

  it("스냅샷과 결과물이 일치해야 함", () => {
    expect(component).toMatchSnapshot();
  });
});
