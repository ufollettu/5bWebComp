import styled from "styled-stencils";
import {
  border,
  radius
} from "../../assets/designSystemToken/borderAndRadius.json";

// import colors from "constants/colors";
// import breakpoints from 'constants/breakpoints'
// import fonts from 'constants/fonts'

export const Wrap = styled.button`
   {
    border-radius: ${radius["style-radius-base"]};
    border: ${border["style-border-size "]};
    height: 36px;
    width: 145px;
  }
`;
