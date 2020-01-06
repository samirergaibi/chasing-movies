/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";

import { getRandomMovies } from "../api/api";
import MovieIntroduction from "../components/MovieIntroduction";
import Button from "../components/Button";

const RandomMovies = () => {
  const [randomMovies, setRandomMovies] = useState();

  useEffect(() => {
    getRandomMovies().then(resp => setRandomMovies(resp.results));
  }, []);

  const loadMore = () => {
    getRandomMovies().then(resp =>
      setRandomMovies([...randomMovies, ...resp.results])
    );
  };

  return (
    <div>
      <h1>Random Movies</h1>
      <p
        css={{
          backgroundColor: "#ffffbb",
          margin: "15px 30px 50px 30px",
          padding: "15px 10px",
          borderRadius: "5px",
          boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
          "@media(min-width: 1025px)": {
            width: "40%",
            margin: "15px auto 50px auto"
          }
        }}
      >
        Reloading this page will result in twenty new randomly selected movies.
      </p>
      <div
        css={{
          marginBottom: "10vh",
          "& hr:last-of-type": {
            display: "none"
          }
        }}
      >
        {randomMovies &&
          randomMovies.map(movie => {
            return (
              <Fragment key={movie.id}>
                <MovieIntroduction movie={movie} />
                <hr
                  css={{
                    width: "50%",
                    margin: "10vh auto"
                  }}
                />
              </Fragment>
            );
          })}
      </div>
      {randomMovies && <Button onClick={loadMore}>Load More</Button>}
    </div>
  );
};

export default RandomMovies;
