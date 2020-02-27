/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";


const NavLink = (props) => {
  return(
    <Link {...props} getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent && "#2b90af",
        }
      }
    }} />
  );
}

export default NavLink;