import React, { Component } from "react";
import Speaking from "./speaking.jsx";
import Listening from "./listening.jsx";

import "./../index.css";

class Byline extends Component {
  state = {};
  render() {
    return (
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
          className="headertext"
          style={{
            display: "block",
            width: "90%",
            padding: "5px 15px",
            margin: 0,
            marginLeft: "25px",
          }}
        >
          <div
            style={{
              borderRadius: "5px",
              backgroundColor: "#FEE5BE",
              width: "109%",
              height: "120px",
              marginLeft: "-15px",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                marginBottom: "0px",
                marginTop: "30px",
                padding: "10px",
              }}
            >
              {this.props.currentContent.title}
            </h3>
            <h5
              className="name"
              style={{
                padding: "5px 10px 5px 10px",
                margin: 0,
                paddingBottom: "0px",
                marginBottom: "20px",
              }}
            >
              {this.props.currentContent.author} &nbsp;|&nbsp;{" "}
              {this.props.currentContent.date}
            </h5>
          </div>
        </div>
        <Listening currentContent={this.props.currentContent} />
      </div>
    );
  }
}

export default Byline;
