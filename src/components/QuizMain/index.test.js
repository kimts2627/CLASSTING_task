import React from "react";
import { mount, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import QuizMain from "./index";
import QuizInput from "./QuizInput";
import QuizTitle from "./QuizTitle";
import { store } from "../../index";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });
let component = null;

describe("QuizMain", () => {
  describe("QuizMain", () => {
    it("QuizMain 컴포넌트가 정상적으로 렌더링 되어야 함", () => {
      component = mount(
        <Provider store={store}>
          <QuizMain />
        </Provider>
      );
      expect(component.length).toBe(1);
    });
  });

  describe("QuizInput", () => {
    it("QuizInput 컴포넌트가 정상적으로 렌더링 되어야 함", () => {
      component = mount(
        <Provider store={store}>
          <QuizInput />
        </Provider>
      );
      expect(component.length).toBe(1);
    });

    it("select tag들이 정상적으로 렌더링 되어야 함", () => {
      expect(component.find("select").length).toEqual(3);
    });

    it("button input tag가 정상적으로 렌더링 되어야 함", () => {
      expect(component.find("input").length).toEqual(1);
    });
  });

  describe("QuizTitle", () => {
    it("QuizTitle 컴포넌트가 정상적으로 렌더링 되어야 함", () => {
      component = mount(
        <Provider store={store}>
          <QuizTitle />
        </Provider>
      );
      expect(component.length).toBe(1);
    });
  });

  it("스냅샷과 결과물이 일치해야 함", () => {
    expect(component).toMatchSnapshot();
  });
});
