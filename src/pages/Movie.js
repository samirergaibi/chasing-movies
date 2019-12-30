/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, Fragment } from "react";

import { getMovie } from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import timeConverter from "../utils/timeConverter";


const Movie = ({ movieId }) => {

  const [movie, setMovie] = useState();

  useEffect(() => {
    getMovie(movieId).then(resp => setMovie(resp));
  }, [movieId]);

  return(
    <Fragment>
      {
        movie ?
        <Fragment>
          <h1>{movie.title}</h1>
          <div css={{
            fontSize: 14,
            margin: "20px auto",
            backgroundColor: "#f1f1f1",
            width: "80%",
            padding: 10,
            boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
            borderRadius: 2,
            "> p": {
              margin: 0
            }
          }}>
            <p>{movie.genres.map((genre, i) => i < movie.genres.length - 1 ? `${genre.name}, ` : `${genre.name}`)}</p>
            <p>{movie.release_date}</p>
            <p>{timeConverter(movie.runtime)}</p>
          </div>
          <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.title} poster`} />
          <p css={{
            padding: "0 20px",
            letterSpacing: 1,
            lineHeight: 1.6
          }}>{movie.overview}</p>
        </Fragment>
        :
        <LoadingSpinner />
      }
    </Fragment>
  );
}

export default Movie;