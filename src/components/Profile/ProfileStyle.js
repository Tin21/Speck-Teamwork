import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import {
  Button,
  InputField,
  InputLabel,
  Form as FormikForm,
} from '../../utils/styles/generalStyles';
import { ReactComponent as ProfilePictureCircle } from '../../assets/images/profile-circle.svg';
import { ReactComponent as VisibilityIcon } from '../../assets/images/visibility-icon.svg';
import { ReactComponent as UploadIcon } from '../../assets/images/upload-icon.svg';
import { NavLink } from 'react-router-dom';

export const ProfileWrapper = styled.div`
  padding: 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 42px 72px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 42px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 320px;

    ${(props) =>
      props.isUpdating &&
      `
          max-width: 450px;
      `}
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 520px;

    ${(props) =>
      props.isUpdating &&
      `
          max-width: 542px;
      `}
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
  &::after {
    content: 'Profile';
  }

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 32px;

    &::after {
      content: 'Your profile';
    }
  }
`;

export const Cancel = styled.p`
  font-weight: 600;
  font-size: 15px;

  &:hover {
    cursor: pointer;
  }

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 16px;
  }
`;

export const ProfileButton = styled(Button)`
  height: 38px;
  padding: 0;

  ${(props) =>
    props.isEdit &&
    ` &::after {
    content: "Edit";
    }
    `}

  ${(props) =>
    props.isUpdate &&
    ` &::after {
    content: "Update";
    }
    `}

    @media screen and (${breakpoints.tabletSmall}) {
    height: 43px;
    width: 126px;

    ${(props) =>
      props.isEdit &&
      ` &::after {
      content: "Edit profile";
      }
      `}

    ${(props) =>
      props.isUpdate &&
      ` &::after {
      content: "Update";
      }
      `}
  }

  ${(props) =>
    props.isSecondaryDisabled &&
    `
    @media screen and (${breakpoints.tabletSmall}) {
      width: 160px;
    }

    margin-top: 14px;
    height: 32px;
    width: 160px;
    border: 1px solid ${colors.buttonBorder};
    padding: 6px 12px;
    color: ${colors.buttonPrimary};
    background: rgba(191, 57, 57, 0);
        

    &:hover {
        background: rgba(191, 57, 57, 0); 
        cursor: auto;
    }
  `}

  ${(props) =>
    props.isSecondaryEnabled &&
    `
    @media screen and (${breakpoints.tabletSmall}) {
      width: 160px;
    }
    
      margin-top: 14px;
      height: 32px;
      width: 160px;
      border: 1px solid ${colors.buttonBorder};
      padding: 6px 12px;
      color: ${colors.buttonPrimary};
      background: rgba(191, 57, 57, 0);

      &:hover {
          color: ${colors.white};
        }
    `}
`;

export const Field = styled(InputField)`
  height: 48px;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 56px;
  }

  ${(props) =>
    props.isDisabled &&
    `
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textLightGrey};
  `}

  ${(props) =>
    props.isEnabled &&
    `
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
  `}

  ${(props) =>
    props.isPasswordDisabled &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textLightGrey};
      font-size: 30px;
      letter-spacing: 3px;
  `}

${(props) =>
    props.isPasswordEnabled &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
      font-size: 30px;
      letter-spacing: 3px;
  `}

${(props) =>
    props.isPasswordVisible &&
    `
      height: 44px;
      width: 100%;
      background-color: ${colors.bgSecondary};
      padding: 12px 24px;
      color: ${colors.textPrimary};
      font-size: 16px;
  `}
`;

export const Label = styled(InputLabel)`
  ${(props) =>
    props.isDisabled &&
    `
      color: ${colors.textSecondaryGrey};
  `}

  ${(props) =>
    props.isEnabled &&
    `
      color: ${colors.textPrimary};
  `}
`;

export const ButtonWrapper = styled.div`
  width: 74px;
  height: 38px;

  ${(props) =>
    props.isUpdate &&
    `
        width: 96px;
    `}
`;

export const PictureWrapper = styled.div`
  display: flex;
  height: max-content;
  justify-content: center;

  @media screen and (${breakpoints.tabletSmall}) {
    justify-content: left;
  }
`;

export const PictureFrame = styled(ProfilePictureCircle)`
  width: 118px;
  margin-bottom: 14px;

  @media screen and (${breakpoints.tabletSmall}) {
    width: 158px;
    height: 158px;
    margin-bottom: 24px;
  }
`;

export const UserAvatar = styled.img`
  position: absolute;
  top: 156px;
  object-fit: cover;
  height: 106px;
  width: 106px;
  border-radius: 50%;
  z-index: 1;
  border: 2px solid ${colors.profileAvatarBorder};

  @media screen and (${breakpoints.tabletSmall}) {
    height: 142px;
    width: 142px;
    left: 32px;
    top: 158px;
  }

  @media screen and (${breakpoints.tablet}) {
    left: 80px;
    top: 176px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    left: 292px;
  }
`;

export const VisibleIcon = styled(VisibilityIcon)`
  position: absolute;
  right: 40px;
  top: 624px;
  width: 22px;
  height: 15px;
  z-index: 2;

  &:hover {
    cursor: pointer;
  }

  @media screen and (${breakpoints.tabletSmall}) {
    top: 706px;
    left: 500px;
  }

  @media screen and (${breakpoints.tablet}) {
    top: 724px;
    left: 548px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    left: 810px;
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const PassChangeLink = styled(NavLink)`
  font-weight: 600;
  font-size: 14px;
  color: #0085ff;

  margin-top: 8px;
`;

export const Form = styled(FormikForm)`
  @media screen and (${breakpoints.tabletSmall}) {
    min-width: 520px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    min-width: 572px;
  }
`;

export const UploadPhotoIcon = styled(UploadIcon)`
  display: none;

  &:hover {
    cursor: pointer;
    path {
      fill: ${colors.textTertiaryGrey};
    }
  }

  @media screen and (${breakpoints.tabletSmall}) {
    display: block;
    width: 52px;
    height: 52px;
    position: absolute;
    top: 264px;
    left: 124px;
    z-index: 3;
  }

  @media screen and (${breakpoints.tablet}) {
    top: 282px;
    left: 172px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    left: 384px;
  }
`;
