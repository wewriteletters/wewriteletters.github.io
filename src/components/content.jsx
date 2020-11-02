import React, { Component, Fragment } from "react";

import PullQuote from "./pullquote.jsx";

import "./../index.css";

class Content extends Component {
  state = { content: null, file: null };

  componentDidUpdate = () => {
    let propsFile = `/content/${this.props.currentContent.filename}`;
    if (this.state.file === null || propsFile !== this.state.file) {
      this.getCurrentContent();
    }
  };

  fetchXML = (filepath) => {
    return fetch(filepath).then((response) => {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  getCurrentContent = async () => {
    let file = `/content/${this.props.currentContent.filename}`;
    let text = await this.fetchXML(file);
    text = <div dangerouslySetInnerHTML={{ __html: text }} />;

    this.setState({ content: text, file: file });
  };

  render() {
    return (
      <div style={{ width: "90%", margin: "0 auto" }}>{this.state.content}</div>
    );
  }
}

export default Content;
