import React, { Component } from "react";
import Papa from "papaparse";

import "./index.css";

import Arrow from "./components/arrow.jsx";
import Letter from "./components/letter.jsx";

class TodaysContent extends Component {
  state = {
    allContent: [
      {
        author: null,
        date: null,
        filename: null,
      },
    ],
    currentContent: 0,
  };

  componentDidMount = () => {
    this.getCsvData();
  };

  fetchCsv = () => {
    return fetch("/data/cms.csv").then((response) => {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  getAllContent = (result) => {
    let data = this.formatJSON(result.data);
    console.log(data);
    this.setState({ allContent: data });
  };

  // num is either +1 or -1
  handleClick = (num) => {
    this.setState({ currentContent: this.state.currentContent + num });
  };

  formatJSON = (data) => {
    let fullJSON = [];
    for (let i = 0; i < data.length; i++) {
      let JSONPiece = {};
      for (let j = 0; j < data[i].length; j++) {
        if (i !== 0) {
          JSONPiece[data[0][j]] = data[i][j];
        }
      }
      if (i !== 0) {
        fullJSON.push(JSONPiece);
      }
    }
    console.log(fullJSON);
    return fullJSON;
  };

  getCsvData = async () => {
    let csvData = await this.fetchCsv();

    Papa.parse(csvData, {
      complete: this.getAllContent,
    });
  };

  render() {
    return (
      <div style={{ display: "inline-flex", width: "100%" }}>
        <Arrow
          direction={true}
          allContent={this.state.allContent}
          currentContent={this.state.currentContent}
          handleClick={this.handleClick}
        />
        <Letter
          allContent={this.state.allContent}
          currentContent={this.state.currentContent}
        />
        <Arrow
          direction={false}
          allContent={this.state.allContent}
          currentContent={this.state.currentContent}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default TodaysContent;
