import React, { Component } from "react";
import PiaStand from "./static/Pia_Stand.png";
import EvanStand from "./static/Evan_Stand.png";

class Speaking extends Component {
  state = {};
  render() {
    return (
      <img
        style={{ height: "180px", marginTop: "-4px", marginRight: "-25px" }}
        src={
          this.props.currentContent.author === "Pia Deshpande"
            ? PiaStand
            : EvanStand
        }
        alt={"Image of " + this.props.currentContent.author}
      ></img>
    );
  }
}

export default Speaking;
