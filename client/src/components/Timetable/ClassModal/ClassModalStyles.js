import styled from "styled-components";
import Modal from "react-modal";

export const StyledModal = styled(Modal)`
  background-color: ${props => props.theme.sidebarBg};
  box-shadow: 1px 1px 3px -1px rgba(0, 0, 0, 0.5);
  border-top: 7px solid ${props => props.color};
  color: ${props => props.theme.text};
  outline: 0;
  border-radius: 3px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 15px;
  position: absolute;
  max-width: 90%;
  height: auto;
  margin: 0 auto;
  top: 23%;
  position: relative;

  @media screen and (min-width: 480px) {
    padding: 20px;
  }

  @media screen and (min-width: 600px) {
    padding: 28px;
    max-width: 560px;
  }
`;

export const ModalHeader = styled.h1`
  margin-top: 0;
  font-size: 17px;
  border-bottom: solid 1px ${props => props.theme.ttBorderColor};
  padding-bottom: 7px;
`;

export const SubjectAttribute = styled.div`
  font-weight: bold;

  @media screen and (min-width: 480px) {
    flex: 0 0 128px;
  }

  @media screen and (min-width: 600px) {
    flex: 0 0 150px;
  }
`;

export const SubjectInfo = styled.div`
  font-size: 14px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 4px;
  }

  @media screen and (min-width: 480px) {
    display: flex;
    flex-direction: row;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.theme.text};
  background-color: transparent;
  border: none;
  opacity: 0.5;
  top: 18px;
  right: 18px;
  position: absolute;
`;
