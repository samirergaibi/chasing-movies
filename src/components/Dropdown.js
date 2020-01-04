/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import DropdownList from "./DropdownList";

const Dropdown = ({ children, items, setSelectedItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(children);

  const dropdownRef = useRef();

  useEffect(() => {
    document.addEventListener("click", event => {
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setIsOpen(false);
      }
    })
  }, [])

  return (
    <Fragment>
      <span
        // tabIndex="0" // TODO make avalable to tab and select with arrows
        // onKeyPress={() => {
        //   setIsOpen(!isOpen);
        // }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        ref={dropdownRef}
        css={{
          position: "relative",
          zIndex: "0",
          display: "inline-block",
          width: "200px",
          cursor: "pointer"
        }}
      >
        <span
          css={{
            display: "inline-block",
            border: "1px solid #000",
            borderRadius: "5px",
            padding: "5px 10px",
            width: "100%"
          }}
        >
          {value}
          <FontAwesomeIcon
            icon="sort-down"
            css={{
              position: "absolute",
              right: 10
            }}
          />
        </span>
        <DropdownList
          isOpen={isOpen}
          setValue={setValue}
          items={items}
          setSelectedItem={setSelectedItem}
          setIsOpen={setIsOpen}
        />
      </span>
    </Fragment>
  );
};

export default Dropdown;
