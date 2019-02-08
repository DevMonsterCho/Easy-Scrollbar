import React, { Component } from "react";
import { render } from "react-dom";

import ScrollBar from "../../src";

class Demo extends Component {
  render() {
    return (
      <div style={{ height: "500px" }}>
        <ScrollBar color={"blue"} width={10}>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
          <h1>scollbar Demo</h1>
        </ScrollBar>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
