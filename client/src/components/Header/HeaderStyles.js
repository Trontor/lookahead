import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  max-height: 60px;
  min-height: 20px;
  text-align: left;
  background-color: ${props => props.theme.headerBg};
  display: flex;
  justify-content: center;
  /* align-content: center; */
  flex-direction: column;
  color: white;
  padding: 14px 12px;
  margin: 0px;
  /* Should always be on top7 */
  z-index: 3;
  position: relative;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.12);
  @media screen and (min-width: 1024px) {
  }
`;

export const HeaderText = styled.div`
  letter-spacing: 0.02em;
  text-transform: lowercase;
  display: inline;
  font-family: 'Quicksand';
  font-size: 24px;
  font-weight: 800;
  padding-bottom: 1px;
`;

export const HeaderSubtitle = styled.span`
  font-size: 11px;
  display: inline;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.08em;
  opacity: 0.8;
`;

export const Emoji = styled.span`
  right: 12px;
  font-size: 24px;
  position: absolute;
  transform: translateY(2px);
  text-align: right;
  cursor: pointer;

  @media screen and (max-width: 359px) {
    display: none;
  }
`;
