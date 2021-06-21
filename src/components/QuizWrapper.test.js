import React from "react";
import QuizWrapper from "./QuizWrapper";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { store } from "../index";
import { Provider } from "react-redux";

configure({ adapter: new Adapter() });
let component = null;

describe("QuizWrapper", () => {
  it("컴포넌트가 정상적으로 렌더링 되어야 함", () => {
    component = shallow(
      <Provider store={store}>
        <QuizWrapper />
      </Provider>
    );
    expect(component.length).toBe(1);
  });

  it("스냅샷과 결과물이 일치해야 함", () => {
    expect(component).toMatchSnapshot();
  });
});
