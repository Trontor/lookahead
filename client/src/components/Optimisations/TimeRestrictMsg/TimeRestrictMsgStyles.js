import styled from "styled-components";

export const TimeRestrictMsgWrapper = styled.div`
  margin: 10px 18px 18px 18px;
`;

export const TimeRestrictError = styled.div`
  border: 2px solid #FFC7B0;
  /* background-color: #FFEFEB; */
  color: #FA7E65;
  padding: 12px;
  border-radius: 4px;
  font-weight: bold;
  line-height: 1.375em;
`

export const PossibilitiesStat = styled.div`
  color: ${props => props.theme.accent};
  border-radius: 4px;
  font-weight: bold;
  line-height: 1.375em;
  text-align: center;
`;

