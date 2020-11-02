import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";

import "./../index.css";

class SmallBlock extends Component {
  state = {};
  render() {
    let style = { textDecoration: "none", color: "black" };
    console.log(this.props.key);
    return (
      <HashRouter>
        <NavLink exact to="/content" style={style}>
          <div
            style={{
              padding: "20px",
              margin: "0 auto",
              backgroundColor: "#f7fbfd",
              borderRadius: "10px",
              maxWidth: "350px",
            }}
          >
            <div
              style={{ borderBottom: "solid 1px black", textAlign: "center" }}
            >
              <h3>{this.props.currentContent.title}</h3>
              <h5>
                {this.props.currentContent.author}&nbsp;|&nbsp;
                {this.props.currentContent.date}
              </h5>
            </div>
            <div style={{ margin: "10px" }}>
              <p>{this.props.currentContent.firstParagraph}</p>
            </div>
          </div>
        </NavLink>
      </HashRouter>
    );
  }
}

export default SmallBlock;
