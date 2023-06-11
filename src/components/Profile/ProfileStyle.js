import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { Button } from '../../utils/styles/generalStyles';
import { ReactComponent as ProfilePictureCircle } from '../../assets/images/profile-circle.svg';

export const ProfileWrapper = styled.div`
  padding: 24px;
`;

export const TitleWrapper = styled.div`
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 24px;
`;

export const Cancel = styled.p`
  font-weight: 600;
  font-size: 15px;
`;

export const ProfileButton = styled(Button)`
  height: 38px;
  padding: 0;

  ${(props) =>
    props.isSecondary &&
    `
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
`;

export const PictureFrame = styled(ProfilePictureCircle)`
  width: 118px;
  margin-bottom: 14px;
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
`;
