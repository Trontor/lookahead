import styled, {css} from 'styled-components';

export const InfoTable = styled.table`
  width: 100%;
  background: ${props => props.theme.cardBg};
  margin-top: 10px;
  padding: 7px;
  text-align: left;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  border-spacing: 0;
  /* border-top: 8px solid ${props => props.color}; */
  th {
    width: 25%;
    padding-left: 4px;
    padding-bottom: 3px;

    &.header {
      font-size: 14px;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 1024px) {
    /* border-left: 8px solid ${props => props.color};
    border-top: none; */
  }
`;
export const ClassInfoRow = styled.tr`
  letter-spacing: -0.01em;
  cursor: pointer;
  ${props =>
    props.highlight &&
    css`
      background-color: ${props => props.color};
      color: #3f3844;
    `}

  ${props =>
    props.odd &&
    !props.highlight &&
    css`
      background-color: ${props => props.theme.sidebarBg};
    `}

  td {
    padding: 3px 4px;
  }

  td:first-child {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    padding-left: 5px;
  }

  td:last-child {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
  }
`;

export const StreamClassInfoRow = styled.tr`
  cursor: pointer;
  ${props =>
    props.highlight &&
    css`
      background-color: ${props.color};
      color: #3f3844;
      ${props.firstRow &&
      css`
        td:last-child {
          border-top-right-radius: 3px;
        }
        td:first-child {
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
        }
      `}
      ${props.lastRow &&
      css`
        td:last-child {
          border-bottom-right-radius: 3px;
        }
      `}
    `}

  ${props =>
    props.odd &&
    !props.highlight &&
    css`
      background-color: ${props => props.theme.sidebarBg};
      td:first-child {
        background-color: inherit;
      }
    `}

  td {
    padding: 3px 5px;
  }
`;
