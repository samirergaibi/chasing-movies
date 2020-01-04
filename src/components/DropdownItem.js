/** @jsx jsx */
import { jsx } from "@emotion/core";

const DropdownItem = ({ children, setValue, setSelectedItem, id }) => {

  return (
    <li
      onClick={() => {
        setValue(children);
        setSelectedItem(id);
      }}
      css={{
        padding: "15px 0 15px 15px",
        ":hover": {
          backgroundColor: "#eee"
        }
      }}
    >
      {children}
    </li>
  );
};

export default DropdownItem;
