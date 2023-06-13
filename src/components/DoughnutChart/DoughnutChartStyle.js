import styled from 'styled-components';
import { breakpoints, colors } from '../../utils/styles/theme';

export const DoughnutChartText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  font-weight: bold;
  color: ${colors.textPrimaryGrey};
`;

export const DoughnutChartWrapper = styled.div`
  position: relative;
  margin-top: 32px;
`;

export const DoughnutChartsWrapper = styled.div`
  @media screen and (${breakpoints.tablet}) {
    margin: 16px 32px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 21px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin: 0;
    gap: 27px;
  }
`;
