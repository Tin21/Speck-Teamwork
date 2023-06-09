import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const LectureDetailsWrapper = styled.div`
  margin-bottom: 40px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 32px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 56px;
  }
`;

export const LectureFlexedNav = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  flex-direction: row;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const LectureUnderline = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: underline;
  color: ${colors.textLink};
`;

export const LectureBreadcrumbText = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: (${colors.textPrimaryGrey});
`;

export const LectureDetailsTitle = styled.h1`
  color: ${colors.textPrimaryGrey};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
    line-height: 39px;
    margin-bottom: 24px;
  }
`;
export const LectureDetailsContent = styled.p`
  color: ${colors.textSecondary};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.01em;
`;

export const LectureCriteriaText = styled.p`
  color: ${colors.textSecondaryGrey};
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 16px;
`;
export const DetailsWrapper = styled.div`
  background: ${colors.white};
  border-radius: 8px;
`;

export const DetailsInner = styled.div`
  padding: 24px 32px;
`;

export const DetailsTitle = styled.h3`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: ${colors.textPrimaryGrey};
  padding-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const DetailsSubtitle = styled.p`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #7f8591;
`;

export const DetailsFigure = styled.figure`
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 6px;
  width: 100%;
  padding-bottom: 24px;
`;

export const LogoImg = styled.img`
  width: 60px;
  height: 60px;
`;

export const AwardImg = styled.img`
  width: 52px;
  height: 52px;
`;
