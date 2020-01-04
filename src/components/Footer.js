/** @jsx jsx */
import { jsx } from "@emotion/core";



const Footer = () => {
  return(
    <footer css={{
      fontSize: "12px",
      backgroundColor: "#252525",
      minHeight: "5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "auto"
    }}>
      <a 
      css={{
        color: "#fff",
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