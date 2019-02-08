import React, { Component } from "react";
import uuid from "uuid";

import "./index.scss";

export default class ScrollBar extends Component {
  state = {
    key: uuid()
  };

  scrollElement = {};
  barDetail = {};
  timer = null;

  componentDidMount() {
    const { key } = this.state;
    this.scrollElement.section = this.refs[`scroll-section-${key}`];
    this.scrollElement.wrap = this.refs[`scroll-wrap-${key}`];
    this.scrollElement.content = this.refs[`scroll-content-${key}`];
    this.scrollElement.barwrap = this.refs[`scroll-bar-wrap-${key}`];
    this.scrollElement.bar = this.refs[`scroll-bar-${key}`];

    const { section, wrap, content, barwrap, bar } = this.scrollElement;
    this.setPosition();

    const delay = 1500;
    wrap.addEventListener("scroll", e => {
      this.setPosition();
      section.classList.add("active");

      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        section.classList.remove("active");
      }, delay);
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    const props = {
      this: JSON.stringify(this.props),
      next: JSON.stringify(nextProps)
    };
    return props.this !== props.next;
  }

  setPosition = () => {
    const { wrap, content, barwrap, bar } = this.scrollElement;
    this.barDetail.scrollHeight = wrap.scrollHeight;
    this.barDetail.scrollTop = wrap.scrollTop;
    this.barDetail.height = wrap.offsetHeight;
    this.barDetail.ratio = this.barDetail.scrollHeight / this.barDetail.height;
    this.barDetail.barHeight = this.barDetail.height / this.barDetail.ratio;
    this.barDetail.barPosition =
      this.barDetail.height /
      (this.barDetail.scrollHeight / this.barDetail.scrollTop);

    const { height, barHeight, barPosition } = this.barDetail;

    bar.style.height = barHeight + "px";
    bar.style.top = barPosition + "px";

    if (barHeight >= height) {
      barwrap.style.display = "none";
    }
  };

  componentDidUpdate() {
    console.log(`componentDidUpdate`);
  }

  render() {
    const { key } = this.state;
    let { color = "red", width = "10px", radius = "25px" } = this.props;

    if (typeof width === "number") width = width + "px";

    const barWrapStyle = {
      width
    };

    const barStyle = {
      backgroundColor: color,
      borderRadius: radius
    };

    return (
      <div className="scroll-section" ref={`scroll-section-${key}`}>
        <div className="scroll-wrap" ref={`scroll-wrap-${key}`}>
          <div className="scroll-content" ref={`scroll-content-${key}`}>
            {this.props.children}
          </div>
        </div>
        <div
          className="scroll-bar-wrap"
          ref={`scroll-bar-wrap-${key}`}
          style={barWrapStyle}
        >
          <span
            className="scroll-bar"
            ref={`scroll-bar-${key}`}
            style={barStyle}
          />
        </div>
      </div>
    );
  }
}
