/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useEffect, useState } from "react";

import { getRandomMovie } from "../api/api";


const RandomMovie = () => {

  const [randomMovie, setRandomMovie] = useState();

  useEffect(() => {
    getRandomMovie().then(resp => setRandomMovie(resp));
  }, []);

  return(
    <Fragment>
      <h1>Random Movie</h1>
      {
        randomMovie ? <p>Movie has loaded</p> : <p>Loading...</p>
      }
    </Fragment>
  );
}

export default RandomMovie;