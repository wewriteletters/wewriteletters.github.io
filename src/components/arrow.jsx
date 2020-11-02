import React, { Component } from "react";

import right from "./static/rightArrow.png";
import left from "./static/leftArrow.png";

class Arrow extends Component {
  state = {};
  // left = true, right = false

  onMouseEnter = (e) => {
    e.target.style.borderBottom = "2px solid #8F2337";
  };

  onMouseExit = (e) => {
    e.target.style.borderBottom = "none";
  };

  checkRight = () => {
    return this.props.allContent.length - 1 > this.props.currentContent
      ? true
      : false;
  };

  checkLeft = () => {
    return this.props.currentContent > 0 ? true : false;
  };

  onLeftClick = (e) => {
    this.props.handleClick(-1);
  };

  onRightClick = (e) => {
    this.props.handleClick(1);
  };

  render() {
    return this.props.direction && this.checkLeft() ? (
      <img
        src={left}
        alt="Left arrow; click to page left."
        style={{
          float: "left",
          padding: "10px",
          margin: "20px",
          width: "30px",
          height: "30px",
          position: "-webkit-sticky",
          position: "sticky",
          top: "40%",
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseExit}
        onClick={this.onLeftClick}
      />
    ) : !this.props.direction && this.checkRight() ? (
      <img
        src={right}
        alt="Right arrow; click to page right."
        style={{
          float: "right",
          padding: "10px",
          margin: "20px",
          width: "30px",
          height: "30px",
          position: "-webkit-sticky",
          position: "sticky",
          top: "40%",
        }}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseExit}
        onClick={this.onRightClick}
      />
    ) : (
      <div
        style={{
          padding: "10px",
          margin: "20px",
          width: "30px",
          height: "30px",
          position: "-webkit-sticky",
          position: "sticky",
          top: "40%",
        }}
      ></div>
    );
  }
}

export default Arrow;
