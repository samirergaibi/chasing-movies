/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCast = ({ cast }) => {
  const castToDisplay = cast.slice(0, 4);
  return (
    <div
      css={{
        backgroundColor: "rgba(37,37,37, 0.95)",
        color: "#fff",
        padding: "20px",
        margin: "20px",
        borderRadius: "5px",
        boxShadow: "1px 1px 8px #000",
        "@media(min-width: 1025px)": {
          width: "50%",
          margin: "20px auto"
        }
      }}
    >
      <FontAwesomeIcon icon="users" css={{ color: "#ffcd94" }} />
      <h3 css={{ display: "inline-block", margin: "0 0 10px 10px" }}>
        Top Cast
      </h3>
      <table
        css={{
          fontSize: 12,
          margin: "auto",
          "@media(min-width: 1025px)": {
            fontSize: 15
          },
          "& a": {
            color: "#fff",
            textDecoration: "none"
          }
        }}
      >
        <tbody>
          {castToDisplay.map(castMember => (
            <tr key={castMember.id}>
              <td>
                <a
                  href={`https://www.google.com/search?q=${castMember.name
                    .split(" ")
                    .join("+")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w45${castMember.profile_path}`}
                  />
                </a>
              </td>
              <td>
                <a
                  href={`https://www.google.com/search?q=${castMember.name
                    .split(" ")
                    .join("+")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {castMember.name}
                </a>
              </td>
              <td>
                <FontAwesomeIcon
                  icon="chevron-right"
                  css={{ margin: "0 20px" }}
                />
              </td>
              <td>{castMember.character}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieCast;
