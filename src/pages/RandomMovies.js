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
    getRandomMovies().then(resp => setRandomMovies([...randomMovies, ...resp.results]));
  }

  console.log(randomMovies);

  return (
    <div
      css={{
        "& div:last-of-type > hr": {
          display: "none"
        }
      }}
    >
      <h1>Random Movies</h1>
      {randomMovies &&
        randomMovies.map(movie => {
          return (
            <div key={movie.id}>
              <MovieIntroduction key={movie.id} movie={movie} />
              <hr
                css={{
                  width: "50%",
                  margin: "10vh auto"
                }}
              />
            </div>
          );
        })}
        <Button onClick={loadMore}>Load More</Button>
    </div>
  );
};

export default RandomMovies;
