/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Router } from "@reach/router";

import Nav from "./Nav";
import Home from "../pages/Home";
import RandomMovies from "../pages/RandomMovies";
import FilterMovies from "../pages/FilterMovies";
import About from "../pages/About";
import Movie from "../pages/Movie";
import Footer from "../components/Footer";
import "./IconLibrary";

function App() {
  return (
    <div css={{
      display: "flex",
      flexDirection: "column",
      height: "100vh"
    }}>
      <Nav />
      <main
        css={{
          textAlign: "center",
          letterSpacing: "1px",
          lineHeight: 1.4,
          marginTop: "15vh",
          marginBottom: "5vh",
          "@media(min-width: 1025px)": {
            marginTop: "5vh"
          }
        }}
      >
        <Router>
          <Home path="/" />
          <RandomMovies path="random-movies" />
          <FilterMovies path="filter-movies" />
          <Movie path="movie/:movieId" />
          <About path="about" />
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
