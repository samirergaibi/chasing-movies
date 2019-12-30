/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";

import { getFrontPageMovies } from "../api/api";
import MovieContainer from "../components/MovieContainer";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const [randomMovies, setRandomMovies] = useState();

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 18);
    getFrontPageMovies()
      .then(resp => {
        setRandomMovies(resp.results.slice(randomNumber, randomNumber + 3));
      })
      .catch(err => console.error("Home: ", err));
  }, []);

  return (
    <Fragment>
      <h1 css={{ margin: 40 }}>Movie Chasing</h1>
      <p css={{ margin: 40 }}>
        Welcome to <b>Movie Chasing!</b> This is the site you go to when you're
        having problems finding a movie to watch.
      </p>
      {randomMovies ? (
        randomMovies.map(movie => (
          <MovieContainer movie={movie} key={movie.id} />
        ))
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
};

export default Home;
