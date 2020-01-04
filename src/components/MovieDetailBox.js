/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment } from "react";

import timeConverter from "../utils/timeConverter";
import dateConverter from "../utils/dateConverter";

const MovieDetailBox = ({ movie }) => {
  const rating = Math.floor(movie.vote_average / 2);
  const rest = (movie.vote_average / 2) % 1;
  const stars = Array(rating).fill(<FontAwesomeIcon icon="star" />);
  if (rest >= 0.25 && rest <= 0.75) {
    stars.push(<FontAwesomeIcon icon="star-half" />);
  } else if (rest >= 0.75) {
    stars.push(<FontAwesomeIcon icon="star" />);
  }
  return (
    <div
      css={{
        backgroundColor: "rgba(37,37,37, 0.9)",
        color: "#fff",
        zIndex: "-1",
        padding: "20px 0 20px 0",
        margin: "10px 40px",
        borderRadius: "5px",
        boxShadow: "1px 1px 8px #000",
        "@media(min-width: 1025px)": {
          width: "50%",
          margin: "20px auto"
        },
        "& p": {
          margin: "0 0 5px 0",
        },
        "& div": {
          minWidth: "30%"
        }
      }}
    >
      <h2 css={{ margin: 0, "@media(min-width: 1025px)": { marginBottom: "20px" } }}>
        {movie.title}
      </h2>
      <div
        css={{
          marginBottom: "10px",
          "& > svg": {
            color: "#d4af37",
            margin: "0 3px"
          }
        }}
      >
        {stars.map((star, i) => {
          return <Fragment key={`star-${i}`}>{star}</Fragment>;
        })}
      </div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-around",
          fontSize: 13,
          "@media(min-width: 1025px)": {
            fontSize: "15px"
          }
        }}
      >
        <div css={{ color: "#fff" }}>
          <FontAwesomeIcon icon="calendar-alt" css={{ color: "#2b90af" }} />
          <p>{dateConverter(movie.release_date)}</p>
        </div>
        <div
          css={{
            color: "#fff"
          }}
        >
          <FontAwesomeIcon icon="theater-masks" css={{ color: "#fc6c6c" }} />
          {movie.genres.map(genre => (
            <p key={genre.id}>{genre.name}</p>
          ))}
        </div>
        <div>
          <FontAwesomeIcon icon="clock" css={{ color: "#2baf54" }} />
          <p>{timeConverter(movie.runtime)}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailBox;
