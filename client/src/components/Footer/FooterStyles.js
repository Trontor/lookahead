import { OutboundLink } from "react-ga";
import styled from "styled-components";
export const FooterWrapper = styled.div`
  height: 100%;
  background-color: ${props => props.theme.sidebarBg};
  grid-row-start: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  padding-bottom: 20px;
  & > div {
    text-align: center;
  }
  @media screen and (min-width: 1024px) {
    box-shadow: -5px 2px 1px 5px rgba(0, 0, 0, 0.15);
  }
`;
export const Credit = styled.div`
  font-weight: normal;
  margin: 4px 0;
  font-size: 12px;
  color: #888;
`;
export const Spacer = styled.span`
  margin: 0 7.5px;
  ::after {
    content: "•";
  }
`;
export const SocialIcon = styled(OutboundLink).attrs(({ solid, name }) => ({
  className: solid ? "fas fa-" + name : "fab fa-" + name
}))`
  text-decoration: none;
  color: inherit;
  margin: 0 7.5px;
`;
