import React, { Component } from "react";
import Papa from "papaparse";

import "./index.css";

import SmallBlock from "./components/smallBlock.jsx";
import BigBlock from "./components/bigBlock.jsx";

class Home extends Component {
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
    this.setState({ allContent: data });
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
    console.log(this.state.allContent);
    let oldContent = this.state.allContent
      .slice(0, this.state.allContent.length - 1)
      .reverse();
    return (
      <div style={{ margin: "0 20%" }}>
        <BigBlock
          currentContent={
            this.state.allContent[this.state.allContent.length - 1]
          }
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto",
            gridGap: "30px",
            margin: "0 auto",
          }}
        >
          {oldContent.map((article, index) => {
            console.log(article.author);
            return <SmallBlock currentContent={article} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Home;
