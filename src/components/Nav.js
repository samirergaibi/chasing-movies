/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";
import { Link } from "@reach/router";

import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";

const Nav = () => {
  const linkStyle = {
    display: "none",
    "@media(min-width: 1025px)": {
      display: "initial"
    }
  };

  const [menuIsShowing, setMenuIsShowing] = useState(false);

  const showOrHideMenu = () => {
    if (menuIsShowing) {
      setMenuIsShowing(false);
    } else {
      setMenuIsShowing(true);
    }
  };
  const hideMenu = () => {
    if (menuIsShowing) {
      setMenuIsShowing(false);
    }
  };

  return (
    <Fragment>
      <nav
        css={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: "#2b90af",
          padding: "20px 10px 20px 0",
          "> a": {
            fontSize: "22px",
            color: "#fff",
            textDecoration: "none"
          },
          "@media(min-width: 1025px)": {
            position: "initial",
            justifyContent: "space-around"
          }
        }}
      >
        <Logo hideMenu={hideMenu} />
        <HamburgerMenu
          showOrHideMenu={showOrHideMenu}
          menuIsShowing={menuIsShowing}
        />
        <Link css={linkStyle} to="/">Home</Link>
        <Link css={linkStyle} to="/chase-movie">
          Random Movie
        </Link>
        <Link css={linkStyle} to="/chase-movie">
          Movie By Genre
        </Link>
        <Link css={linkStyle} to="/about">
          About
        </Link>
      </nav>
    </Fragment>
  );
};

export default Nav;
