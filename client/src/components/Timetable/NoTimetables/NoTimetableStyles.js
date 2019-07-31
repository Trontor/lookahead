import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: 20px auto;

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
  }
`;

export const Text = styled.span`
  vertical-align: middle;
  font-size: 24px;
  font-family: "Quicksand";
  position: relative;
  bottom: 10%;
  margin-top: 5px;
  &:nth-child(n + 2) {
    font-size: 13px;
    font-family: "Karla", sans-serif;
  }
`;
