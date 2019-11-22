import styled, { css } from "styled-components";

import Markdown from "markdown-to-jsx";

export const NotificationWrapper = styled.div`
  position: relative;
  background-color: #2BA676;
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

  p {
    margin-top: 0;
  }

  h3 {
    margin-bottom: 0.2em;
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  margin-top: 10px;
`;

export const NotificationTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  font-family: "Quicksand", sans-serif;
  letter-spacing: 0.03em;
  margin-bottom: 0.75em;
`;

export const NotificationContent = styled.div`
  font-size: 13px;
  font-weight: normal;
  transition: max-height 0.5s, opacity 0.5s;
  ${props =>
    props.toggled &&
    css`
      opacity: 0;
    `};
  max-height: ${props => (props.toggled ? "0px" : "500px")};
`;

export const NotificationDismiss = styled.span`
  cursor: pointer;
  /* font-size: ${props => (props.toggled ? "inherit" : "bold")}; */
  font-size: ${props => (props.toggled ? "18px" : "20px")};
  margin-top: -2px;

  i {
    font-size: 12px;
  }
`;

export const NotificationMarkdown = styled(Markdown)`
  line-height: 1.35em;
`;
