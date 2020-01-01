/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import {Link } from "@reach/router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faTheaterMasks } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import { getMovie } from "../api/api";
import LoadingSpinner from "./LoadingSpinner";
import timeConverter from "../utils/timeConverter";
import dateConverter from "../utils/dateConverter";

const MovieCard = ({ movie }) => {

  const [currentMovie, setCurrentMovie] = useState();

  useEffect(() => {
    getMovie(movie.id).then(resp => setCurrentMovie(resp));
  }, [movie.id]);

  return currentMovie ? (
    <div>
      <Link to={`/movie/${currentMovie.id}`} css={{ color: "#000", textDecoration: "none" }}>
        <h2>{currentMovie.title}</h2>
      </Link>
      <div
        css={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Link to={`/movie/${currentMovie.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w185/${currentMovie.poster_path}`}
            alt={`${movie.title}-poster`}
          />
        </Link>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 5%",
            "& p": {
              margin: 0
            },
            "& > div": {
              margin: "10% 0"
            }
          }}
        >
          <div>
            <FontAwesomeIcon icon={faCalendarAlt} title="Release Date" />
            <p>{dateConverter(currentMovie.release_date)}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTheaterMasks} title="Genres" />
            {currentMovie.genres.map(genre => (
              <p key={genre.id}>
                {genre.name === "Science Fiction" ? "Sci-Fi" : genre.name}
              </p>
            ))}
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} title="Runtime" />
            <p>{timeConverter(currentMovie.runtime)}</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default MovieCard;
