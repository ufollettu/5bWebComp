import styled from 'styled-stencils';
import {border,radius} from '../../assets/designSystemToken/borderAndRadius.json';
import {myzanichelli} from '../../assets/designSystemToken/colors.json';


// import colors from 'constants/colors'
// import breakpoints from 'constants/breakpoints'
// import fonts from 'constants/fonts'

export const Wrap = styled.div`

div.selected {
  background: ${myzanichelli["myzanichelli-blue-dark"]};
  border-radius: ${radius["style-radius-base"]};
  border: ${border["style-border-size "]};
  height: 36px;
  width: 145px;
}

div {

  & > p {
    color: rgb(255, 255, 255);
    font-family: ProximaNova-Bold;
    font-size: 14px;
    font-weight: bold;
    height: 14px;
    letter-spacing: 0.1px;
    line-height: 14px;
    width: 73px;
  }
}
`;
