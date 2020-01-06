/** @jsx jsx */
import { jsx } from "@emotion/core";

import tmdb from "../images/tmdb.png";

const Footer = () => {
  return (
    <footer
      css={{
        fontSize: "12px",
        backgroundColor: "#252525",
        minHeight: "5vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "auto"
      }}
    >
      <img
        src={tmdb}
        alt="The Movie Database logo"
        css={{
          height: "12px",
          marginRight: "5px"
        }}
      />
      <a
        css={{
          color: "#fff",
          textDecoration: "none"
        }}
        href="https://www.themoviedb.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by TMD
      </a>
    </footer>
  );
};

export default Footer;
