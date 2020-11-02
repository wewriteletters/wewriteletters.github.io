import React, { Component } from "react";
import AboutBlock from "./aboutBlock.jsx";

import "./../index.css";

import PiaStand from "./static/C_Pia_Stand_T.png";
import EvanStand from "./static/C_Evan_Stand_T.png";
import Amaka from "./static/Amaka.png";

class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <AboutBlock
          image={PiaStand}
          name={"Pia Deshpande"}
          content={
            <p>
              Hi! I’m Pia (she/her pronouns, please!). I’m an Indian from Texas
              living in the cold, cold North, neither prepared by evolution or
              experience. My likes include avoiding the plague, reading
              profusely, messing with data, and reminding my friends to{" "}
              <a
                href="https://www.usa.gov/register-to-vote"
                style={{ color: "#124061" }}
              >
                register to vote
              </a>
              . My dislikes include mango pits, shoddy responses to FOIA
              requests, and my own bad first drafts. I just graduated from
              college, and will be meeting this recession head on by shamelessly
              sharing{" "}
              <a
                href="https://www.linkedin.com/in/pia-deshpande-she-her-80bb59147/"
                style={{ color: "#124061" }}
              >
                my LinkedIn
              </a>{" "}
              here.
            </p>
          }
        />
        <AboutBlock
          image={EvanStand}
          name={"Evan Allgood"}
          content={
            <p>
              Hey y’all, I’m Evan! I’m a white transmasculine person (they/them
              or he/him, please!) currently residing in Minnesota. I’m a fan of
              good poetry, hikes through the forest, fostering dogs, and
              building and redesigning websites until they finally feel just
              right. I’m very much not a fan of sleeping less than 8 hours a
              night, weeks without rain, and being stuck in the same place all
              day (we love quarantine). I also just graduated from college, so—
              help me out by checking out{" "}
              <a
                href="https://www.linkedin.com/in/evanallgood/"
                style={{ color: "#124061" }}
              >
                my LinkedIn
              </a>
              , too?
            </p>
          }
        />
        <AboutBlock
          image={Amaka}
          name={"Chiamaka Mgboji"}
          content={
            <p>
              All art on this site has been commissioned from the incredible
              Amaka Mgboji! We highly recommend you check out more of her work
              on{" "}
              <a
                href="https://www.amakamgboji.com/"
                style={{ color: "#124061" }}
              >
                her website
              </a>
              , as well as her{" "}
              <a
                href="https://twitter.com/amakahere?lang=en"
                style={{ color: "#124061" }}
              >
                Twitter
              </a>{" "}
              and{" "}
              <a
                href="https://www.instagram.com/amakahere/"
                style={{ color: "#124061" }}
              >
                Instagram
              </a>
              !{" "}
            </p>
          }
        />
      </div>
    );
  }
}

export default AboutUs;
