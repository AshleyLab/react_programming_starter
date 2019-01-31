import assert from "assert";
import React from "react";
import ShallowRenderer from "react-test-renderer/shallow";

import PapersIndex from "./index";

describe("PapersIndex", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<PapersIndex />);
  const result = renderer.getRenderOutput();
  const children = result.props.children;

  it("should be able to render two immediate child nodes", () => {
    assert.equal(children.length, 2);
  });

  it("should be able to render one <h1> node", () => {
    assert.equal(children[0].type, "h1");
  });
});
