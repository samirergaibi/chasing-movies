/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const Movie = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <p css={{margin: "40px 0 5px 0"}}>{movie.title}</p>
      <Link to={`movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={`${movie.original_title} poster`} />
      </Link>
    </div>
  );
};

export default Movie;