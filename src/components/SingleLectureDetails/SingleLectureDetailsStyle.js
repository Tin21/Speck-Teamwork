import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const LectureDetailsWrapper = styled.div`
  background: ${colors.white};
  border-radius: 8px;
`;

export const LectureDetailsInner = styled.div``;

export const DetailsTitle = styled.h3`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.textPrimaryGrey};
`;

export const DetailsSubtitle = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7f8591;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DetailsFigure = styled.figure`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  padding: 10px;
`;

export const LogoImg = styled.img`
  width: 52px;
  height: 52px;
`;

export const AwardImg = styled.img`
  width: 52px;
  height: 52px;
`;
