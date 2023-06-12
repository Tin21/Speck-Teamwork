import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const ChartWrapper = styled.div`
  background: ${colors.white};
  border-radius: 8px;
  height: 100%;
  margin: 26px;
`;

export const ChartTitle = styled.h3`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${colors.textPrimaryGrey};
  letter-spacing: 0.44px;
  padding: 24px 16px 0;
`;

export const ChartSubtitle = styled.p`
  font-family: ${fonts.primary};
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${colors.greyBody};
  letter-spacing: 0.25px;
  padding: 0px 16px;
`;
