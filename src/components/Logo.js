/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

const Logo = ({ hideMenu }) => {
  return (
    <Link
      onClick={hideMenu}
      to="/"
      css={{
        marginLeft: 10,
        fontWeight: 800,
        fontSize: 22,
        position: "relative",
        zIndex: 99,
        "@media(min-width: 1025px)": {
          display: "none"
        }
      }}
    >
      MC
    </Link>
  );
};

export default Logo;
