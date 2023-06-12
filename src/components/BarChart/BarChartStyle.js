import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const SingleChartWrapper = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  margin: 26px;
  padding: 24px 16px 0;

  @media screen and (${breakpoints.tablet}) {
    margin: 16px 36px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin: 0;
    width: 595px; // TODO FIX
    max-width: 700px;
  }
`;

export const ChartTitle = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${colors.textPrimaryGrey};
  letter-spacing: 0.44px;
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
    // width: 100%;
    max-width: 1200;
    // margin: 24px 49px;
  }
`;

export const ChartsWrapper = styled.div`
  @media screen and (${breakpoints.desktop}) {
    display: grid;

    gap: 27px;
    grid-template-columns: repeat(2, 1fr);
    // width: 100%;
    max-width: 1200;
    margin: 24px 49px;
  }
`;
