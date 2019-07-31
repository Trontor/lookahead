import styled from "styled-components";
export const NotificationWrapper = styled.div`
  position: relative;
  background-color: #4caf50;
  border-radius: 2px;
  color: white;
  font-family: "Karla", sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-bottom: 10px;
  a {
    color: inherit;
  }
`;

export const NotificationHeader = styled.div`
  font-size: 16px;
`;

export const NotificationContent = styled.div`
  margin: 6px 0;
  font-size: 13px;
  font-weight: normal;
`;

export const NotificationDismiss = styled.span`
  position: absolute;
  top: 0px;
  cursor: pointer;
  right: 7px;
  font-weight: bold;
  font-size: 24px;
`;
