import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../../utils/styles/theme';

export const Section = styled.section`
  background-color: ${colors.bgPrimary};

  &_secondary {
    background-color: ${colors.bgSecondary};
  }
`;

export const SectionInner = styled.div`
  margin: 29px 24px;

  @media screen and (${breakpoints.tablet}) {
    margin: 42px 72px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin: 40px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: left;
  font-size: 28px;
  color: ${colors.textPrimary};
  font-family: ${fonts.textPrimary};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;

  ${(props) =>
    props.isFlexDisplay &&
    ` 
    display: flex;
    justify-content: space-between;

    @media screen and (${breakpoints.tablet}) {
      max-width: 400px;
    }

    @media screen and (${breakpoints.desktop}) {
      max-width: 100%;
    }
  `}

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 36px;
  }
`;

export const SectionSubtitle = styled.p`
  margin: 12px 0 16px;
  text-align: left;
  color: ${colors.textSecondary};
  font-size: 16px;
  max-width: 663px;
  line-height: 150%;
  letter-spacing: 0.01em;

  @media screen and (${breakpoints.tablet}) {
    margin: 16px 0;
    margin-bottom: 40px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 48px;
    margin-top: 24px;
  }
`;
