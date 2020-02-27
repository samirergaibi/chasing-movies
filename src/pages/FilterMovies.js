/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect } from "react";

import Dropdown from "../components/Dropdown";
import { getGenres, getFilteredMovies } from "../api/api";
import MovieIntroduction from "../components/MovieIntroduction";
import Button from "../components/Button";
import { navigationTracker } from "../utils/navigationTracker";

const FilterMovies = ({ path }) => {
  const [genres, setGenres] = useState(null);
  const [genre, setGenre] = useState(null);
  const [movies, setMovies] = useState(null);

  const loadMore= () => {
    getFilteredMovies(genre).then(filteredMovies => setMovies([...movies, ...filteredMovies.results]))
  }

  useEffect(() => {
    navigationTracker(path);
  }, [path]);

  useEffect(() => {
    getGenres().then(resp => setGenres(resp.genres));
  }, []);

  useEffect(() => {
    if (genre) {
      getFilteredMovies(genre).then(filteredMovies =>
        setMovies(filteredMovies.results)
      );
    }
  }, [genre]);

  return (
    <Fragment>
      <h1>Filter Movies</h1>
      <div>
        <Dropdown items={genres} setSelectedItem={setGenre}>
          Genre...
        </Dropdown>
      </div>
      <div
        css={{
          marginBottom: "10vh",
          "& hr:last-of-type": {
            display: "none"
          }
        }}
      >
        {movies &&
          movies.map(movie => {
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
      {movies && <Button onClick={loadMore}>Load More</Button>}
    </Fragment>
  );
};

export default FilterMovies;
