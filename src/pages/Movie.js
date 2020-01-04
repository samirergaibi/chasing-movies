/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getMovie } from "../api/api";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieDetailBox from "../components/MovieDetailBox";
import YoutubeVideo from "../components/YoutubeVideo";
import MovieCast from "../components/MovieCast";

const Movie = ({ movieId }) => {
  const [movie, setMovie] = useState();

  const width = window && window.innerWidth;

  useEffect(() => {
    getMovie(movieId).then(resp => {
      setMovie(resp);
    });
  }, [movieId]);

  return (
    <Fragment>
      {movie ? (
        <Fragment>
          <MovieDetailBox movie={movie} />
          <img
            src={`https://image.tmdb.org/t/p/${width < 1025 ? "w185" : "w300"}/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div
            css={{
              backgroundColor: "rgba(37,37,37, 0.95)",
              color: "#fff",
              padding: "60px 10px 20px 10px",
              margin: "0 20px",
              letterSpacing: 1,
              lineHeight: 1.6,
              borderRadius: "5px",
              position: "relative",
              bottom: "50px",
              zIndex: "-1",
              boxShadow: "1px 1px 8px #000",
              "@media(min-width: 1025px)": {
                width: "50%",
                margin: "0 auto",
                padding: "60px 60px 20px 60px"
              }
            }}
          >
            <FontAwesomeIcon icon="book" css={{ color: "#886440" }} />
            <h3
              css={{
                margin: 0,
                letterSpacing: 2,
                display: "inline-block",
                marginLeft: "10px",
              }}
            >
              Plot
            </h3>
            <p
              css={{
                margin: "10px 0",
                paddingTop: "0px",
                fontSize: "15px",
                "@media(min-width: 1025px)": {
                  fontSize: "17px"
                }
              }}
            >
              {movie.overview}
            </p>
          </div>
          {
            movie.videos.results.length > 0 &&
            <YoutubeVideo src={movie.videos.results[0].key} />
          }
          <MovieCast cast={movie.credits.cast} />
        </Fragment>
      ) : (
        <LoadingSpinner />
      )}
    </Fragment>
  );
};

export default Movie;
