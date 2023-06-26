import styled from 'styled-components';
import { breakpoints, colors, fonts } from '../../utils/styles/theme';
import { ReactComponent as SpeckIcon } from '../../assets/images/speck-icon.svg';

export const LoginSectionInner = styled.div`
  margin: 29px 24px;

  @media screen and (${breakpoints.tablet}) {
    margin: 42px 72px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin: 40px;
  }
`;

export const LoginSectionTitle = styled.h2`
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
    font-size: 32px;
  }
`;

export const LoginSectionSubtitle = styled.p`
  margin: 12px 0 16px;
  text-align: left;
  color: ${colors.textSecondary};
  font-size: 16px;
  max-width: 100%;
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

export const LoginSpeckLogo = styled(SpeckIcon)`
  path {
    fill: ${colors.bgSecondary};
  }
  margin-bottom: 0;

  @media screen and (${breakpoints.tablet}) {
    width: 150px;
    height: 65px;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    width: 89px;
    height: 37px;
  }

  @media screen and (${breakpoints.desktop}) {
    width: 150px;
    height: 65px;
  }
`;

export const LoginLogoText = styled.p`
  font-weight: 500;
  color: ${colors.logoText};
  letter-spacing: 0.1em;
  padding-left: 1px;
  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 8px;
  }
  @media screen and (${breakpoints.desktop}) {
    font-size: 13.5px;
  }

  @media screen and (${breakpoints.tablet}) {
    font-size: 13.5px;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.bgSecondary};

  @media screen and (${breakpoints.tablet}) {
    flex-direction: column;
  }

  @media screen and (${breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const LoginLeftContainer = styled.div`
  background-color: ${colors.bgSecondary};

  @media screen and (${breakpoints.tablet}) {
    min-width: 799px;
    width: 100%;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    height: 100%;
  }
  @media screen and (${breakpoints.desktop}) {
    padding: 96px;
    max-width: 500px;
    height: 100%;
  }
`;

export const LoginRightContainer = styled.div`
  overflow: hidden;

  @media screen and (${breakpoints.mobileLarge}) {
    display: none;
  }

  @media screen and (${breakpoints.tablet}) {
    display: block;
    min-width: 676px;
    height: auto;
  }

  @media screen and (${breakpoints.desktop}) {
    display: block;
    height: 100%;
  }
`;

export const LoginImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const LoginLogoWrapper = styled.div`
  margin-bottom: 67px;
`;
