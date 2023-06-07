import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const SingleLectureWrapper = styled.div`
  /* box-sizing: border-box; */
  background: #ffffff;
  border-radius: 8px;
`;
export const SingleLectureInner = styled.div`
  padding: 24px;
`;
export const SingleLectureTitle = styled.h3`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${colors.textPrimaryGrey};
  margin-bottom: 8px;
  @media screen and (${breakpoints.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
`;
export const SingleLectureSubtitle = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7f8591;
  padding-bottom: 24px;
`;
