import React from "react";
import { NavLink, HashRouter } from "react-router-dom";

import "./../index.css";

const Header = () => {
  let liStyle = {
    float: "left",
    display: "block",
    textAlign: "center",
    padding: "5px 15px",
    fontWeight: "200",
    borderBottom: "1px solid transparent",
    color: "#242716",
    fontSize: "18px",
  };

  let anchorStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <HashRouter>
      <header style={{ margin: "20px" }}>
        <h1
          style={{
            textAlign: "center",
            margin: "0",
            padding: "15px",
            fontFamily: "Esteban",
            fontSize: "50px",
            color: "#242716",
            paddingBottom: "0px",
            zIndex: 1,
          }}
        >
          <NavLink exact to="/" style={anchorStyle}>
            we write letters
          </NavLink>
        </h1>

        <div className="navbarWrapper" style={{ textAlign: "center" }}>
          <ul
            style={{
              display: "inline-block",
              listStyleType: "none",
              padding: "0",
              overflow: "hidden",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <li style={liStyle}>
              <NavLink exact to="/" style={anchorStyle} className="headerlink">
                home
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/content" style={anchorStyle} className="headerlink">
                today's content
              </NavLink>
            </li>
            <li style={liStyle}>
              <NavLink to="/about" style={anchorStyle} className="headerlink">
                about us
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </HashRouter>
  );
};

export default Header;
