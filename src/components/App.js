/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";
import { Fragment } from "react";

import Nav from "./Nav";
import Home from "../pages/Home";
import RandomMovie from "../pages/RandomMovie";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Footer from "../components/Footer";

function App() {

  return (
    <Fragment>
      <Nav/>
      <main css={{
        textAlign: "center"
      }}>
        <Router>
          <Home path="/" />
          <RandomMovie path="chase-movie" />
          <About path="about" />
          <Movie path="movie/:movieId" />
        </Router>
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;