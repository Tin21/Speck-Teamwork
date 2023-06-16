import styled from 'styled-components';
import { breakpoints } from '../../../utils/styles/theme';

export const ColumnBody = styled.div`
  ${(props) =>
    props.isRanking &&
    `
        margin-left: 26px;
    `}

  @media screen and (${breakpoints.desktopSmall}) {
  }
`;
