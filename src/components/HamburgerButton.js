/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";

const HamburgerButton = ({ showOrHideMenu, menuIsShowing }) => {
  const [hamburgerLine] = useState({
    width: 25,
    backgroundColor: "#fff",
    height: 3,
    display: "block",
    margin: "4px auto",
    borderRadius: "10px",
    transition: "all 0.3s"
  });

  const [hamburgerLineTop, setHamburgerLineTop] = useState(hamburgerLine);
  const [hamburgerLineMiddle, setHamburgerLineMiddle] = useState(hamburgerLine);
  const [hamburgerLineBottom, setHamburgerLineBottom] = useState(hamburgerLine);

  useEffect(() => {
    if (menuIsShowing) {
      setHamburgerLineTop({
        ...hamburgerLine,
        transform: "rotate(45deg) translateY(5px) translateX(5px)"
      });
      setHamburgerLineMiddle({
        ...hamburgerLine,
        opacity: 0,
        transform: "rotate(-45deg)"
      });
      setHamburgerLineBottom({
        ...hamburgerLine,
        transform: "rotate(-45deg) translateY(-5px) translateX(5px)"
      });
    } else {
      setHamburgerLineTop(hamburgerLine);
      setHamburgerLineMiddle(hamburgerLine);
      setHamburgerLineBottom(hamburgerLine);
    }
  }, [menuIsShowing, hamburgerLine]);

  return (
    <button
      onClick={showOrHideMenu}
      css={{
        backgroundColor: "transparent",
        border: "none",
        outline: "none",
        position: "relative",
        zIndex: 99
      }}
    >
      <span css={hamburgerLineTop}></span>
      <span css={hamburgerLineMiddle}></span>
      <span css={hamburgerLineBottom}></span>
    </button>
  );
};

export default HamburgerButton;
