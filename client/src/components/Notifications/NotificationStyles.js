import styled, { css } from "styled-components";
import Markdown from "markdown-to-jsx";

export const NotificationWrapper = styled.div`
  position: relative;
  background-color: #4caf50;
  border-radius: 2px;
  color: white;
  font-family: "Karla", sans-serif;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.12);
  padding: 10px;
  margin-bottom: 10px;
  ${props =>
    props.collapsable &&
    css`
      padding: 1px 15px;
    `}
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
  transition: max-height 0.5s, opacity 0.5s;
  ${props =>
    props.toggled &&
    css`
      opacity: 0;
    `};
  max-height: ${props => (props.toggled ? "0px" : "300px")};
`;

export const NotificationDismiss = styled.span`
  position: absolute;
  top: 0px;
  cursor: pointer;
  right: 7px;
  padding: ${props => (props.toggled ? "5px 5px 0 0" : "bold")};
  font-size: ${props => (props.toggled ? "inherit" : "bold")};
  font-size: ${props => (props.toggled ? "20px" : "24px")};
`;

export const NotificationMarkdown = styled(Markdown)`
  line-height: 20px;
`;
