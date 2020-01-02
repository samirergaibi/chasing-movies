/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import logo from "../images/logo.png";

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
          // display: "none"
          position: "absolute",
          left: "10px"
        }
      }}
    >
      <img src={logo} alt="logo" css={{width: 50}}/>
    </Link>
  );
};

export default Logo;
