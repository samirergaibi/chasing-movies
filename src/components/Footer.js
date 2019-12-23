/** @jsx jsx */
import { jsx } from "@emotion/core";



const Footer = () => {
  return(
    <footer css={{
      textAlign: "center",
      padding: "80px 0 5px 0",
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