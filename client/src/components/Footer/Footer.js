import React, { useState } from "react";
import { Credit, FooterWrapper, SocialIcon, Spacer } from "./FooterStyles";
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
let timeout = 1000;
const randomHeart = () => {
  do {
    newHeart = heartPool[randomInt(0, heartPool.length)];
  } while (lastHeart === newHeart);
  lastHeart = newHeart;
  return newHeart;
};

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
          Click <a href="https://lookahead-v1.rohyl.io">here</a> for the the
          original lookahead.
        </Credit>
        <Credit>
          Gigi
          <Spacer />
          Styling
          <Spacer />
          <SocialIcon
            name="linkedin"
            href={"https://www.linkedin.com/in/giselleleung/"}
          />
          <SocialIcon name="github" href="https://github.com/giggleinu" />
          <SocialIcon name="codepen" href="https://codepen.io/giggleinu" />
          <SocialIcon
            name="envelope"
            solid
            href="mailto:gleung@student.unimelb.edu.au"
          />
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
