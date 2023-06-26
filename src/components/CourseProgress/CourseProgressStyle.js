import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const CourseProgress = styled.div`
  background-color: ${colors.bgSecondary};
  border-radius: 8px;
  padding: 16px;
  margin: 24px;

  @media screen and (${breakpoints.tablet}) {
    margin: 32px;
    padding: 24px;
  }
  @media screen and (${breakpoints.desktop}) {
    margin: 32px 48px 0 48px;
    max-width: 1105px;
  }
`;

export const CourseProgressTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 18px;
  @media screen and (${breakpoints.tablet}) {
    margin: 0;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 16px;
  }
`;
