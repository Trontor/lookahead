import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 100%;
  background-color: ${props => props.theme.sidebarBg};
  grid-row-start: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  & > div {
    text-align: center;
  }
  @media screen and (min-width: 960px) {
    box-shadow: -5px 2px 1px 5px rgba(0, 0, 0, 0.15);
  }
`;
const Credit = styled.div`
  font-weight: normal;
  margin: 5px 0;
  opacity: 0.5;
  font-size: 12px;
  color: ${props => props.theme.text};
`;
const Spacer = styled.span`
  margin: 0 7.5px;
  ::after {
    content: "•";
  }
`;
const SocialIcon = styled.a.attrs(({ solid, name }) => ({
  className: solid ? "fas fa-" + name : "fab fa-" + name
}))`
  text-decoration: none;
  color: inherit;
  margin: 0 7.5px;
`;
const heartPool = [
  "\u{1F9E1}",
  "\u{1F493}",
  "\u{1F496}",
  "\u{1F497}",
  "\u{1F498}",
  "\u{1F499}",
  "\u{1F49A}",
  "\u{1F49B}",
  "\u{1F49C}",
  "\u{1F49D}",
  "\u{1F5A4}"
];
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
let lastHeart = null;
let newHeart;
const randomHeart = () => {
  do {
    newHeart = heartPool[randomInt(0, heartPool.length)];
  } while (lastHeart === newHeart);
  lastHeart = newHeart;
  return newHeart;
};
let timeout = 1000;
export default function Footer() {
  const [love, setLove] = useState(randomHeart());
  timeout += 50;
  setTimeout(() => {
    const nextHeart = randomHeart();
    setLove(nextHeart);
  }, timeout);

  return (
    <FooterWrapper>
      <div>
        <div>Made for you with {love}</div>
        <Credit>
          Gigi
          <Spacer />
          Styling
          <Spacer />
          <SocialIcon name="linkedin" />
          <SocialIcon name="github" />
          <SocialIcon name="envelope" solid />
        </Credit>
        <Credit>
          Rohyl
          <Spacer />
          Development
          <Spacer />
          <SocialIcon
            name="linkedin"
            href={"https://www.linkedin.com/in/rohyl/"}
          />
          <SocialIcon name="github" href={"https://github.com/Trontor"} />
          <SocialIcon
            name="envelope"
            solid
            href={
              "mailto:rohylj@student.unimelb.edu.au?subject=RE:%20Lookahead%20Semester%20Planner"
            }
          />
        </Credit>
      </div>
    </FooterWrapper>
  );
}
