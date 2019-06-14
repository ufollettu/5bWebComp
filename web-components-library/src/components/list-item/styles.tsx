import styled from "styled-stencils";

import colors from "../../assets/designSystemToken/colors.json";
// import breakpoints from 'constants/breakpoints'
// import fonts from 'constants/fonts'
// import {  } from "";

export const Wrap = styled.li`
  color: ${colors.text["text-gray-light"]};
  font-family: Proxima Nova Lt;
  font-size: 16px;
  font-weight: 600;
  height: 14px;
  letter-spacing: 0.23px;
  line-height: 14px;
  list-style-type: none;
  padding: 8px;
  margin: 8px;
  border-bottom: 2px solid ${colors.backgroud["bg-artboard-gray-light"]};
  width: 20%;

  > span {
    color: ${colors.text["text-myzanichelli-blue"]};
  }
`;
