import test from "ava";
import React from "react";
import createComponent from "react-unit";
import Counter from "../src/containers//counter";

test("sample test", t => {
  const component = createComponent(React.createElement(Counter, {}));

  const initCount = component.findByQuery(".normal")[0];
  t.ok(initCount.props.children === 0);
});
