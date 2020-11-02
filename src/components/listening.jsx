import React, { Component } from "react";
import PiaSit from "./static/Pia_Sit.png";
import EvanSit from "./static/Evan_Sit.png";

class Listening extends Component {
  state = {};
  render() {
    return (
      <img
        style={{
          height: "180px",
          marginTop: "0px",
        }}
        src={
          this.props.currentContent.author === "Pia Deshpande"
            ? EvanSit
            : PiaSit
        }
        alt={"Image of " + this.props.currentContent.author}
      ></img>
    );
  }
}

export default Listening;
