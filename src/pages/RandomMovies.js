/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";

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

  return (
    <div
      css={{
        marginBottom: "10vh",
        "& div:last-of-type > hr": {
          display: "none"
        }
      }}
    >
      <h1>Random Movies</h1>
      <p css={{
        backgroundColor: "#ffffbb",
        margin: "15px 30px 50px 30px",
        padding: "15px 10px",
        borderRadius: "5px",
      }}>Reloading this page will result in twenty new randomly selected movies.</p>
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
