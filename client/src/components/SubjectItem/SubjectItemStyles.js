import styled, { css } from "styled-components";

export const SubjectsWrapper = styled.div`
  /* margin: 5px; */
  /* min-height: 290px; */
`;

export const SubjectWrapper = styled.div`
/* color: ${props => props.textColor}; */
position: relative;
`;

/* * * * * * * * * * * * * * * * LOADING CARD * * * * * * * * * * * * * * * */
export const loadingCard = css`
  height: 92px;
  position: relative;
  border-color: transparent;
  background-image: linear-gradient(
      ${props => props.theme.cardBg},
      ${props => props.theme.cardBg}
    ),
    repeating-linear-gradient(
      60deg,
      ${props => props.theme.loadingGradient} 0%,
      ${props => props.theme.cardBg} 25%,
      ${props => props.theme.loadingGradient} 50%,
      ${props => props.theme.cardBg} 70%,
      ${props => props.theme.loadingGradient} 100%
    );
  background-origin: padding-box, border-box;
  background-clip: padding-box, border-box;
  background-size: 100% 100%, 200% auto;
  background-position: 0 0, 0 200%;
  animation: gradient 3s linear infinite;
  animation-fill-mode: forwards;

  @keyframes gradient {
    0% {
      background-position: 0 0, 0 0;
    }
    100% {
      background-position: 0 0, -200% -200%;
    }
  }

  @media screen and (min-width: 768px) {
    height: 75px;
  }

  @media screen and (min-width: 1024px) {
    height: 58px;
    border-color: transparent;
    background-image: linear-gradient(
        ${props => props.theme.cardBg},
        ${props => props.theme.cardBg}
      ),
      linear-gradient(
        180deg,
        ${props => props.theme.loadingGradient} 0%,
        ${props => props.theme.cardBg} 50%,
        ${props => props.theme.loadingGradient} 100%
      );
    background-size: 100% 100%, 100% 200%;
    background-position: 0 0, 0 100%;
    animation: gradient 1.5s infinite;

    @keyframes gradient {
      0% {
        background-position: 0 0, 0 0;
      }
      100% {
        background-position: 0 0, 0 -200%;
      }
    }
  }
`;

const gradientShimmer = css`
  height: 16px;
  opacity: 0.5;
  background-image: repeating-linear-gradient(
    -60deg,
    ${props => props.theme.loadingGradient} 0%,
    ${props => props.theme.cardBg} 50%,
    ${props => props.theme.loadingGradient} 100%
  );
  background-size: 200% auto;
  background-position: 0 100%;
  animation: shimmer 1s infinite;
  animation-fill-mode: forwards;
  border-radius: 5px;

  @media screen and (min-width: 1024px) {
    height: 14px;
  }

  @keyframes shimmer {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;

export const SubjectCodeLoading = styled.div`
  max-width: 100px;
  margin: 2px auto 8px auto;
  ${gradientShimmer}

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    width: 80px;
  }
`;

export const SubjectNameLoading = styled.div`
  max-width: 240px;
  margin: 0 auto;
  ${gradientShimmer}

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 0;
    width: 50%;
  }
`;

export const LoadingDots = styled.div`
  padding: 0px;
  margin: 8px auto 0 auto;

  span {
    border-radius: 50%;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 3px 5px;
    background: ${props => props.theme.loadingGradient};
    animation: dot 1s ease-in-out infinite alternate;
    animation-fill-mode: forwards;
  }

  span:nth-child(1) {
    animation-delay: -1s;
  }

  span:nth-child(2) {
    animation-delay: -0.7s;
  }

  span:nth-child(3) {
    animation-delay: -0.5s;
  }

  span:nth-child(4) {
    animation-delay: -0.1s;
  }

  @keyframes dot {
    0% {
      transform: scale(0, 0);
    }
    50% {
      opacity: 0.8;
    }
    100% {
      transform: scale(1, 1);
      opacity: 0.2;
    }
  }

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 40px;
    top: 20%;
  }

  @media screen and (min-width: 1024px) {
    vertical-align: middle;
    top: 23%;
    right: 20px;
  }
`;

/* * * * * * * * * * * * * * * * ERROR CARD * * * * * * * * * * * * * * * */
const ErrorCard = css`
  position: relative;
  border-color: crimson;

  @media screen and (min-width: 1024px) {
    border-color: crimson;
  }
`;

const ErrorText = css`
  opacity: 1;
`;

export const ErrorMsg = styled.div`
  margin: -5px 0 5px;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

/* * * * * * * * * * * * * * * * SUBJECT CARD * * * * * * * * * * * * * * * */
export const SubjectCard = styled.div`
  padding: 10px 0 12px 0;
  background-color: ${props => props.theme.cardBg};
  border-top: 8px solid ${props => props.color};
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 2px 2px 3px -2px rgba(0, 0, 0, 0.1);
  line-height: 1.25em;
  & div {
    text-align: center;
    flex: 100%;
  }

  @media screen and (min-width: 1024px) {
    padding: 10px 10px 8px;
    border-left: 8px solid ${props => props.color};
    border-top: 0;
    & div {
      text-align: left;
    }
  }
  ${({ $loading }) => $loading && loadingCard}
  ${({ error }) => error && ErrorCard}
`;

export const SubjectCode = styled.div`
  text-align: center;
  position: relative;
  font-weight: bold;
  opacity: 0.7;
  font-size: 13px;
  text-transform: uppercase;

  ${({ error }) => error && ErrorText}

  @media screen and (min-width: 1024px) {
    text-align: left;
  }

  span {
    font-weight: normal;
    opacity: 0.55;
    margin: 0 5px;
    display: inline-block;
    letter-spacing: 0.02em;

    &:nth-child(4) {
      color: crimson;
      font-weight: bolder;
      text-decoration: underline;
    }
    &:nth-child(2),
    &:nth-child(4) {
      margin: 0;
      font-size: 11px;
      transform: translateY(-0.1em);
      opacity: 0.8;
      cursor: pointer;

      ${({ error }) => {
        return css`
          i {
            color: crimson;
          }
        `;
      }}
    }
  }
`;

export const SubjectName = styled.div`
  max-width: inherit;
  align-self: center;
  font-size: 15px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 53%;
    font-size: 14px;
    margin-top: 2px;
  }

  ${({ error }) => ErrorText}
`;

export const SubjectToolbox = styled.div`
  position: relative;
  right: 0;
  top: 0;
  color: ${props => props.color};

  @media screen and (min-width: 768px) {
    right: 30px;
    top: 42%;
    position: absolute;
  }

  @media screen and (min-width: 1024px) {
    font-weight: bold;
    vertical-align: middle;
    top: 36%;
    right: 28px;
  }
`;

export const ToolboxButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 0 12px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.7;
  ${({ loading }) => loading}

  @media screen and (min-width: 768px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 1024px) {
    padding: 0 6px;
    font-size: 15px;
  }
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  top: 10px;
  right: 4px;
  position: absolute;

  @media screen and (min-width: 1024px) {
    top: 5px;
    right: 4px;
  }
`;
