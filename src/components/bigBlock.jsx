import React, { Component } from "react";
import { NavLink, HashRouter } from "react-router-dom";

import Speaking from "./speaking.jsx";

import "./../index.css";

class BigBlock extends Component {
  state = {};
  render() {
    let style = { textDecoration: "none", color: "black" };
    console.log(this.props.currentContent);
    return (
      <HashRouter>
        <NavLink exact to="/content" style={style}>
          <div
            style={{
              padding: "20px",
              margin: "0 auto",
              marginBottom: "30px",
              backgroundColor: "#f7fbfd",
              borderRadius: "10px",
              maxWidth: "700px",
            }}
          >
            <div
              style={{
                borderBottom: "solid 1px black",
                textAlign: "center",
              }}
            >
              <div
                className="wrapper"
                style={{
                  display: "inline-flex",
                  width: "100%",
                  margin: "0 auto",
                  padding: "0px",
                }}
              >
                <Speaking currentContent={this.props.currentContent} />
                <div
                  style={{
                    display: "block",
                    textAlign: "left",
                    marginLeft: "50px",
                  }}
                >
                  <h3>{this.props.currentContent.title}</h3>
                  <h5>
                    {this.props.currentContent.author}&nbsp;|&nbsp;
                    {this.props.currentContent.date}
                  </h5>
                </div>
              </div>
            </div>

            <div style={{ margin: "10px" }}>
              <p style={{ marginLeft: "20px" }}>
                {this.props.currentContent.firstParagraph}
              </p>
            </div>
          </div>
        </NavLink>
      </HashRouter>
    );
  }
}

export default BigBlock;
