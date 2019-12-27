/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Link } from "@reach/router";

import HamburgerButton from "./HamburgerButton";

const HamburgerMenu = ({ showOrHideMenu, menuIsShowing }) => {

  const [menuPosition, setMenuPosition] = useState(100);
  const [menuOpacity, setMenuOpacity] = useState(0);

  useEffect(() => {
    if(menuIsShowing){
      setMenuPosition(0);
      setMenuOpacity(100);
    } else {
      setMenuPosition(100);
      setMenuOpacity(0);
    }
  }, [menuIsShowing]);

  return (
    <div
      css={{
        "@media(min-width: 1025px)": {
          display: "none"
        }
      }}
    >
      <HamburgerButton
        showOrHideMenu={showOrHideMenu}
        menuIsShowing={menuIsShowing}
      />
      <div
        css={{
          position: "fixed",
          top: "0",
          left: `${menuPosition}vw`,
          opacity: menuOpacity,
          height: "100vh",
          width: "100vw",
          backgroundColor: "#2b90af",
          transition: "all 0.4s"
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginTop: "20vh",
            marginLeft: "10px",
            "> a": {
              textDecoration: "none",
              color: "#fff",
              fontSize: 28,
              fontWeight: 600,
              marginTop: "8vh"
            }
          }}
        >
          <Link to="/chase-movie" onClick={showOrHideMenu}>
            Random Movie
          </Link>
          <Link to="/chase-movie" onClick={showOrHideMenu}>
            Movie By Genre
          </Link>
          <Link to="/about" onClick={showOrHideMenu}>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
