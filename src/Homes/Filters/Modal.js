import React from "react";
import styled from "styled-components";

const Modal = styled.aside`
  position: absolute;
  background-color: white;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  z-index: 6;
`;

const Overlay = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 136px;
  background-color: white;
  opacity: 0.8;
  z-index: 5;
`;

const CancelButton = styled.button`
  padding: 22.5px 30.5px;
  color: #636363;
  line-height: 19px;
  font-size: 16px;
  background: transparent;
  border: none;
`;

const ApplyButton = CancelButton.extend`
  padding: 22.5px 35px;
  color: #008489;
`;

const Bottom = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default ({ overlayClick, children }) => {
  return (
    <React.Fragment>
      <Modal>
        {children}
        <Bottom>
          <CancelButton>Cancel</CancelButton>
          <ApplyButton>Apply</ApplyButton>
        </Bottom>
      </Modal>
      <Overlay onClick={overlayClick} />
    </React.Fragment>
  );
};
