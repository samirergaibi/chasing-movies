/** @jsx jsx */
import { jsx } from "@emotion/core";



const Footer = () => {
  return(
    <footer css={{
      textAlign: "center",
      fontSize: "12px",
    }}>
      <a 
      css={{
        color: "#000",
        textDecoration: "none"
      }}
      href="https://www.themoviedb.org/"
      target="_blank"
      rel="noopener noreferrer"
      >Powered by TMD</a>
    </footer>
  );
}

export default Footer;