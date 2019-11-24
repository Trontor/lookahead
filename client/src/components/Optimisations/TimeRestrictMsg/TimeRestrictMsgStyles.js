import styled from "styled-components";

export const TimeRestrictMsgWrapper = styled.div`
  margin: 10px 18px 18px 18px;
`;

export const TimeRestrictError = styled.div`
  border: 2px solid #ffc7b0;
  /* background-color: #FFEFEB; */
  color: #fa7e65;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  line-height: 1.375em;
`;

export const PossibilitiesStat = styled.div`
  color: ${props => props.theme.accent};
  border-radius: 4px;
  font-weight: bold;
  line-height: 1.375em;
  font-size: 16px;
  text-align: center;
`;
export const PossibilitiesDisclaimer = styled.div`
  color: ${props => props.theme.text};
  border-radius: 4px;
  line-height: 1.375em;
  font-size: 12px;
  font-weight: normal;
  font-style: italic;
  text-align: center;
  max-width: 250px;
  margin: 0 auto;
`;
