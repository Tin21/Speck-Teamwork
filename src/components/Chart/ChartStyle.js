import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const SingleChartOuterWrapper = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  margin: 26px;
  flex-grow: 1;

  @media screen and (${breakpoints.tablet}) {
    margin: 16px 32px;

    ${(props) =>
      props.isDoughnut &&
      `
      margin: 0;
    `}
  }

  @media screen and (${breakpoints.desktop}) {
    margin: 0;
    width: 539px;

    ${(props) =>
      props.isDoughnut &&
      `      
      width: 255px; 
    `}
  }
`;

export const BarChartWrapper = styled.div`
  padding: 21px 0;
`;

export const SingleChartInnerWrapper = styled.div`
  padding: 24px 21px 0px 24px;
`;

export const ChartTitle = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${colors.textPrimaryGrey};
  letter-spacing: 0.44px;
  color: ${colors.textQuaternaryGrey};
`;

export const ChartSubtitle = styled.p`
  font-family: ${fonts.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.greyBody};
  letter-spacing: 0.25px;
`;

export const BarChartGrid = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: grid;
    gap: 27px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200;
  }
`;

export const ChartsWrapper = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: grid;
    gap: 27px;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200;
    margin: 24px 49px;
  }
`;

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
