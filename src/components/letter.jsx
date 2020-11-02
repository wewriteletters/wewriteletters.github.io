import React, { Component } from "react";
import Byline from "./byline.jsx";
import Content from "./content.jsx";
import Papa from "papaparse";

import "./../index.css";

class Letter extends Component {
  state = {};

  render() {
    return (
      <div
        style={{
          padding: "20px",
          margin: "0 auto",
          backgroundColor: "#f7fbfd",
          borderRadius: "10px",
          maxWidth: "700px",
          marginBottom: "30px",
        }}
      >
        <div style={{ display: "flexbox", margin: "0 auto" }}>
          <Byline
            currentContent={this.props.allContent[this.props.currentContent]}
          />
        </div>
        <Content
          currentContent={this.props.allContent[this.props.currentContent]}
        />
      </div>
    );
  }
}

export default Letter;
