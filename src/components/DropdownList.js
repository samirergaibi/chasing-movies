/** @jsx jsx */
import { jsx } from "@emotion/core";

import DropdownItem from "./DropdownItem";

const DropdownList = ({ isOpen, setValue, items, setSelectedItem, setIsOpen }) => {
  return (
    isOpen && (
      <div
        css={{
          width: "100%",
          maxHeight: "200px",
          overflowY: "auto",
          backgroundColor: "#fbfbfb",
          position: "absolute",
          top: 40,
          left: 0,
          borderRadius: "5px"
        }}
      >
        <ul
          css={{
            listStyle: "none",
            padding: "0",
            margin: "0",
            textAlign: "left"
          }}
        >
          {items.map(item => (
            <DropdownItem
              key={item.id}
              id={item.id}
              setValue={setValue}
              setSelectedItem={setSelectedItem}
            >
              {item.name}
            </DropdownItem>
          ))}
        </ul>
      </div>
    )
  );
};

export default DropdownList;
