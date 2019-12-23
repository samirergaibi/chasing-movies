/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment } from "react";
import { Link } from "@reach/router";

const Nav = () => {
  return (
    <Fragment>
      <nav
        css={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#2b90af",
          padding: "20px 0",
          "> a": {
            color: "#fff",
            textDecoration: "none",
          }
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/chase-movie">Random Movie</Link>
        <Link to="/about">About</Link>
      </nav>
    </Fragment>
  );
};

export default Nav;
