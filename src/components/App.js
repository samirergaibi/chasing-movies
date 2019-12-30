/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { Fragment } from "react";

import Nav from "./Nav";
import Home from "../pages/Home";
import RandomMovies from "../pages/RandomMovies";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Footer from "../components/Footer";

function App() {

  return (
    <Fragment>
      <Nav />
      <main css={{
        textAlign: "center",
        letterSpacing: "1px",
        lineHeight: 1.4,
        marginTop: "18vh",
        "@media(min-width: 1025px)": {
          marginTop: "initial"
        }
      }}>
        <Router>
          <Home path="/" />
          <RandomMovies path="random-movies" />
          <About path="about" />
          <Movie path="movie/:movieId" />
        </Router>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;