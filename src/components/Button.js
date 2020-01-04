/** @jsx jsx */
import { jsx } from "@emotion/core";


const Button = ({ children, onClick }) => {
  return(
    <button onClick={onClick} css={{
      border: "none",
      padding: "15px 30px",
      outline: "none",
      letterSpacing: "1.5px",
      backgroundColor: "#2b90af",
      color: "#fff",
      fontSize: "18px",
      borderRadius: "5px",
      ":hover": {
        cursor: "pointer"
      }
    }}>{children}</button>
  );
}

export default Button;