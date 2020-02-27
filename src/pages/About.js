/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { useEffect } from "react";

import why from "../images/why.jpg";
import disclaimer from "../images/disclaimer.jpg";
import { navigationTracker } from "../utils/navigationTracker";

const About = ({ path }) => {

  useEffect(() => {
    navigationTracker(path);
  }, [path]);

  useEffect(() => {
    if (window) window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      {window && window.innerWidth < 1025 && <h1>About</h1>}
      <div
        css={{
          "@media(min-width: 1025px)": {
            display: "flex",
            alignItems: "center"
          }
        }}
      >
        <div
          css={{
            margin: "0 5%",
            padding: "2% 5%",
            borderRadius: "5px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          }}
        >
          <h2>Why did I create this site?</h2>
          <img
            src={why}
            alt="man sitting in sofa infront of computer"
            css={{
              width: "80%",
              borderRadius: "5px",
              marginLeft: "20px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
            }}
          />
          <p
            css={{
              fontSize: "15px"
            }}
          >
            A problem I often found myself in, was trying to find a movie to
            watch. With all of these different streaming services and other
            available options for watching movies online, I often find myself
            lost. There is too many options, to many sites to search. I often
            end up in despair with atleast ten different tabs open of different
            lists or posts about some movie. So I decided to create a
            centralized place for myself where I could find a movie to watch.
          </p>
        </div>
        <div
          css={{
            margin: "5% 5%",
            padding: "2% 5%",
            borderRadius: "5px",
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
          }}
        >
          <h2>Disclaimer</h2>
          <img
            src={disclaimer}
            alt="court hammer lying on it's resting place"
            css={{
              width: "80%",
              borderRadius: "5px",
              marginLeft: "20px",
              boxShadow:
                "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
            }}
          />
          <p
            css={{
              fontSize: "15px"
            }}
          >
            Chasing movie does not provide any kind of streaming service. It's
            purpose is merely to help you find a movie to watch. How and where
            you decide to watch that movie does not concern Chasing Movies. We
            take no responsibility in your activity after finding a movie. If
            you choose to egnage in illegal activity by using a freely available
            streaming service such as lookmovie.ag we are clear of any
            responsibility.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
