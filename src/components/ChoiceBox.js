/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChoiceBox = () => {
  return (
    <div
      css={{
        // backgroundColor: "#2b90af",
        backgroundColor: "rgba(37,37,37, 1)",
        color: "#fff",
        padding: "15px 20px",
        margin: "15px 20px",
        fontStyle: "italic",
        borderRadius: "5px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        "& a": {
          color: "#fff",
          fontWeight: 900,
          fontSize: "20px",
          display: "block",
          margin: "20px",
          textDecoration: "none"
        },
        "& a:hover": {
          color: "#2b90af"
        },
        "@media(min-width: 1025px)": {
          backgroundColor: "rgba(37,37,37, 0.95)",
          width: "45vw",
          margin: "0 auto",
          "& a": {
            margin: "30px"
          }
        }
      }}
    >
      <h2 css={{fontStyle: "normal"}}>You...</h2>
      <div
        css={{
          width: "90%",
          margin: "0 auto",
          borderBottom: "1px solid #fff"
        }}
      ></div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesomeIcon css={{ fontSize: 18 }} icon="question" />
        <Link to="random-movies">Have no idea what to watch</Link>
      </div>
      <div
        css={{
          width: "90%",
          margin: "0 auto",
          borderBottom: "1px solid #fff"
        }}
      ></div>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <FontAwesomeIcon css={{ fontSize: 18 }} icon="filter" />
        <Link to="filter-movies">Kinda know what to watch</Link>
      </div>
    </div>
  );
};

export default ChoiceBox;
