/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import NavLink from "./NavLink";

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
          alignItems: "center",
          position: "fixed",
          zIndex: 1,
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: "#252525",
          padding: "8px 10px 8px 0",
          "> a": {
            fontSize: "22px",
            color: "#fff",
            textDecoration: "none"
          },
          " a:hover": {
            color: "#2b90af"
          },
          "@media(min-width: 1025px)": {
            position: "initial",
            justifyContent: "space-around",
            padding: "20px 10px 20px 50vw",
          }
        }}
      >
        <Logo hideMenu={hideMenu} />
        <HamburgerMenu
          showOrHideMenu={showOrHideMenu}
          menuIsShowing={menuIsShowing}
        />
        {/* <Link css={linkStyle} to="/">Home</Link> */}
        <NavLink css={linkStyle} to="/random-movies">
          Random Movies
        </NavLink>
        <NavLink css={linkStyle} to="/filter-movies">
          Filter Movies
        </NavLink>
        <NavLink css={linkStyle} to="/about">
          About
        </NavLink>
      </nav>
    </Fragment>
  );
};

export default Nav;
