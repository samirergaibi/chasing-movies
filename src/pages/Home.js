/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect } from "react";

import ChoiceBox from "../components/ChoiceBox";
import popcorn from "../images/popcorn.png";
import popcornMobile from "../images/popcorn-mobile.png";
import { navigationTracker } from "../utils/navigationTracker";

const Home = ({ path }) => {

  useEffect(() => {
    navigationTracker(path);
  }, [path]);

  return (
    <div css={{
      paddingTop: "8vh",
      "@media(min-width: 700px)": {
        paddingTop: "10vh"
      },
      "@media(min-width: 1025px)": {
        paddingTop: "0",
      }
    }}>
      <div css={{
        backgroundImage: `url(${popcornMobile})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        "@media(min-width: 1025px)": {
          backgroundImage: `url(${popcorn})`,
          height: "100vh",
        }
      }}></div>
      <p
        css={{
          margin: "0 auto 5vh auto",
          fontSize: "18px",
          color: "#fff",
          lineHeight: 1.6,
          "@media(min-width: 1025px)": {
            margin: "15vh auto 10vh auto",
            width: "50vw",
          }
        }}
      >
        Welcome to <strong>Chasing Movies</strong>! <br/> A centralized place for you to find a movie to watch.
      </p>
      <ChoiceBox />
    </div>
  );
};

export default Home;
