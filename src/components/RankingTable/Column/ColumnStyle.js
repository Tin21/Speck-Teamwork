import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const ColumnBody = styled.div`
  ${(props) =>
    props.isRanking &&
    `
        margin-left: 20px;
        min-width: 70px;
    `}

  ${(props) =>
    props.isName &&
    `
          min-width: 120px;
      `}
    
    ${(props) =>
    props.isPoints &&
    `
        min-width: 100px;
        margin-left: 0px;
      `}

    ${(props) =>
    props.isPercentage &&
    `
          margin-right: 40px;
    `}

    ${(props) =>
    props.isBadges &&
    `
            width: 250px;
            margin-right: 20px;
    `}
    

  @media screen and (${breakpoints.desktopSmall}) {
    margin-left: 90px;
    min-width: 80px;

    ${(props) =>
      props.isName &&
      `
        min-width: 120px;
    `}

    ${(props) =>
      props.isRanking &&
      `
        margin-left: 20px;
    `}

  ${(props) =>
      props.isPercentage &&
      `
        margin-right: 50px;
    `}
  }
`;
