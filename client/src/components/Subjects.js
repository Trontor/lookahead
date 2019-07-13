import React from "react";
import { removeSubject } from "../redux/actions/subjectActions";
import { useSelector, useDispatch } from "react-redux";
import styled, { css } from "styled-components";

const SubjectsWrapper = styled.div`
  /* margin: 5px; */
`;
const SubjectWrapper = styled.div`
  /* color: ${props => props.textColor}; */
  position: relative;
`;

const loadingCSS = css`
    border-top: none!important;

  @media screen and (min-width: 960px) {
    border-left: none!important;
  }
`
;

// const loadingCSS = css`
//   border-width: 2px;
//   border-radius: 0px;
//   /* background: white; */
//   position: relative;
//   @keyframes animatedgradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }
//   &::after {
//     content: "";
//     position: absolute;
//     top: calc(-1 * 2px);
//     left: calc(-1 * 2px);
//     height: calc(100% + 2px * 2);
//     width: calc(100% + 2px * 2);
//     background: linear-gradient(
//       60deg,
//       #f79533,
//       #f37055,
//       #ef4e7b,
//       #a166ab,
//       #5073b8,
//       #1098ad,
//       #07b39b,
//       #6fba82
//     );
//     border-radius: calc(2 * var(2px));
//     z-index: -1;
//     animation: animatedgradient 3s ease alternate infinite;
//     background-size: 300% 300%;
//   }
// `;

const SubjectHeader = styled.div`
  padding: 10px 0 12px 0;
  background-color: ${props => props.theme.cardBg};
  border-top: 8px solid ${props => props.color};
  border-radius: 5px;
  margin: 10px 0;
  box-shadow: 2px 2px 3px -2px rgba(0, 0, 0, 0.1);
  & div {
    text-align: center;
    flex: 100%;
  }

  @media screen and (min-width: 960px) {
    padding: 12px 12px 13px;
    min-height: 50px;
    /* border-radius: 1px; */
    /* background-color: ${props => props.color}; */
    border-left: 8px solid ${props => props.color};
    border-top: 0;
    & div {
      text-align: left;
    }
  }
  ${({ loading }) => loading && loadingCSS}
  /* ${({ loading }) => loadingCSS} */
`;

const SubjectCode = styled.div`
  text-align: center;
  position: relative;
  font-weight: bold;
  opacity: 0.75;
  font-size: 13px;

  @media screen and (min-width: 600px) {
    font-size: 14px;
  }

  @media screen and (min-width: 960px) {
    text-align: left;
    font-size: 11px;
  }
`;

const SubjectName = styled.div`
  max-width: inherit;
  align-self: center;
  font-size: 14px;
  font-weight: bold;
  margin-top: 4px;
  margin-bottom: 7px;

  @media screen and (min-width: 600px) {
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 960px) {
    max-width: 14vw;
    font-size: 13px;
    margin-top: 2px;
    margin-bottom: 5px;
  }

  @media screen and (min-width: 1024px){
    max-width: 16vw;
  }
`;

const SubjectToolbox = styled.div`
  position: relative;
  right: 0;
  top: 0;
  color: ${props => props.color};

  @media screen and (min-width: 768px) {
    right: 30px;
    top: 42%;
    position: absolute;
  }

  @media screen and (min-width: 960px) {
    font-weight: bold;
    vertical-align: middle;
    /* color: ${({ iconColor }) => iconColor}; */
    top: 35%;
  }
`;

const ToolboxButton = styled.button`
  cursor: pointer;
  font-size: 16px;
  padding: 0 12px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.7;

  @media screen and (min-width: 768px) {
    padding: 0 10px;
  }

  @media screen and (min-width: 960px) {
    padding: 0 7px;
    font-size: 15px;
  }
`;

const DeleteButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  color: inherit;
  background-color: transparent;
  border: none;
  opacity: 0.6;
  top: 10px;
  right: 4px;
  position: absolute;

  /* @media screen and (min-width: 600px) {
    top: 8px;
    right: 5px;
  } */

  @media screen and (min-width: 960px) {
    top: 5px;
    right: 4px;
  }
`;

function Subjects() {
  const subjects = useSelector(state => state.subjects);
  const dispatch = useDispatch();
  if (!subjects) {
    return <div>No subjects...</div>;
  }

  const openHandbook = (year, code) => {
    const handbookURL = `https://handbook.unimelb.edu.au/${year}/subjects/${code.toLowerCase()}`;
    window.open(handbookURL, "_blank");
  };
  const openSWS = (year, code) => {
    const swsURL = `https://sws.unimelb.edu.au/${year}/Reports/List.aspx?objects=${code}&weeks=1-52&days=1-7&periods=1-56&template=module_by_group_list`;
    window.open(swsURL, "_blank");
  };
  const deleteSubject = (year, code) => {
    dispatch(removeSubject(code));
  };
  return (
    <SubjectsWrapper>
      {Object.keys(subjects).map(code => {
        const { year, name, loading, data, color } = subjects[code];
        let bgColor = color;
        let textColor = "white";
        if (loading) {
          bgColor = "transparent";
          textColor = "${props => props.theme.text}";
        }
        return (
          <SubjectWrapper textColor={textColor}>
            {/* <SubjectLoader color={color} /> */}

            <SubjectHeader loading={loading} color={bgColor}>
              <SubjectCode>{code}</SubjectCode>
              <SubjectName>{name}</SubjectName>
              <SubjectToolbox iconColor={textColor}>
                <ToolboxButton onClick={() => openSWS(year, code)}>
                  <i className="fa fa-calendar-alt" />
                </ToolboxButton>
                <ToolboxButton onClick={() => openHandbook(year, code)}>
                  <i className="fa fa-book" />
                </ToolboxButton>
                {/* <ToolboxButton onClick={() => deleteSubject(year, code)}>
                <i className="fa fa-times" />
                </ToolboxButton> */}
              </SubjectToolbox>
            </SubjectHeader>
            <DeleteButton onClick={() => deleteSubject(year, code)}>
              ×
            </DeleteButton>
          </SubjectWrapper>
        );
      })}
    </SubjectsWrapper>
  );
}

export default Subjects;
