/* eslint-disable no-undef */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import {shallow} from 'enzyme';
import Hooks from "./Hooks.js";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('First React component test with Enzyme', () => {
  it('renders without crashing', () => {
     shallow(<Hooks />);
   });

   it("renders with count", () => {
    render(<Hooks />, container);
  expect(container.textContent).toBe(" 10");
});

});