import React, { Component } from "react";

import "./../index.css";

class AboutBlock extends Component {
  state = {};
  render() {
    console.log(this.props.name);
    return (
      <div style={{ display: "block" }}>
        {this.props.name === "Pia Deshpande" ? (
          <div
            style={{
              padding: "30px",
              margin: "0 auto",
              backgroundColor: "#f7fbfd",
              borderRadius: "10px",
              maxWidth: "700px",
              marginBottom: "30px",
              display: "inline-flex",
              textAlign: "left",
            }}
          >
            <img
              src={this.props.image}
              alt={"Image of " + this.props.name}
              style={{
                height: "240px",
                margin: "10px",
                verticalAlign: "middle",
                backgroundColor: "#FEE5BE",
                borderRadius: "100%",
              }}
            ></img>
            <div style={{ display: "block" }}>
              <h2>{this.props.name}</h2>
              <p>{this.props.content}</p>
            </div>
          </div>
        ) : this.props.name === "Evan Allgood" ? (
          <div
            style={{
              padding: "30px",
              margin: "0 auto",
              backgroundColor: "#f7fbfd",
              borderRadius: "10px",
              maxWidth: "700px",
              marginBottom: "30px",
              display: "inline-flex",
              textAlign: "left",
            }}
          >
            <div style={{ display: "block" }}>
              <h2>{this.props.name}</h2>
              <p>{this.props.content}</p>
            </div>
            <img
              src={this.props.image}
              alt={"Image of " + this.props.name}
              style={{
                height: "240px",
                margin: "10px",
                verticalAlign: "middle",
                borderRadius: "100%",
                backgroundColor: "#B2D0CD",
              }}
            ></img>
          </div>
        ) : (
          <div
            style={{
              padding: "30px",
              margin: "0 auto",
              backgroundColor: "#f7fbfd",
              borderRadius: "10px",
              maxWidth: "700px",
              marginBottom: "30px",
              display: "inline-flex",
              textAlign: "left",
            }}
          >
            <img
              src={this.props.image}
              alt={"Image of " + this.props.name}
              style={{
                height: "150px",
                margin: "10px",
                verticalAlign: "middle",
              }}
            ></img>
            <div style={{ display: "block" }}>
              <h2>{this.props.name}</h2>
              <p>{this.props.content}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AboutBlock;
