import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const Button = styled.button`
  text-decoration: none;
  font-size: 14px;
  line-height: 16px;
  padding: 7px 16px;
  margin: 12px 12px 12px 0;
  border: 0.5px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  color: ${props => (props.selected ? "white" : "#383838")};
  cursor: pointer;
  background-color: ${props => (props.selected ? "#008489" : "white")};

  ${props =>
    props.desktopOnly &&
    ` display: none;
      @media only screen and (min-width: 992px) {
        display: inline-block;
      }`};
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export default ({
  name,
  selected,
  handleFilterClick,
  handleOverlayClick,
  desktopOnly,
  children
}) => {
  return (
    <Wrapper>
      <Button
        selected={selected}
        desktopOnly={desktopOnly}
        onClick={() => {
          handleFilterClick(name);
        }}
      >
        {name}
      </Button>
      {selected && <Modal overlayClick={handleOverlayClick}>{children}</Modal>}
    </Wrapper>
  );
};
