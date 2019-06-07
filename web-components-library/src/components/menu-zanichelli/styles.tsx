import styled from "styled-stencils";

import colors from "../../assets/designSystemToken/colors.json";
// import breakpoints from 'constants/breakpoints'
// import fonts from 'constants/fonts'

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 8px;
  padding: 8px 8px 8px 8px;

  .header {
    display: flex;
    margin: 8px 8px;
    padding: 8px 8px 8px 8px;

    > div {
      width: 100%;
      > button {
        margin: 8px 8px;
        padding: 8px 8px 8px 8px;
        background-color: transparent;
        border: none;
        color: ${colors.text["text-myzanichelli-blue"]};
      }
    }
  }
  .content {
    width: 100%;
  }
  .download {
    margin: 8px 8px;
    padding: 8px 8px 8px 8px;
    background-color: ${colors["my-zanichelli"]["myzanichelli-blue-normal"]};

    border: none;
    border-radius: 4px;
    color: ${colors.text["text-white"]};
  }
  .footer {
    width: 100%;
  }
`;
