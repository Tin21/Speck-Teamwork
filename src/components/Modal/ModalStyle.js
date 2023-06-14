import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';
import { ReactComponent as ModalCancelIcon } from '../../assets/images/cancel-icon.svg';
import { Button as GeneralButton } from '../../utils/styles/generalStyles';

export const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.bgModalOpaque};
  z-index: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalWrapper = styled.div`
  background-color: ${colors.white};
  width: calc(100% - 48px);
  max-width: 340px;
  border-radius: 4px;
  border: 1px solid ${colors.textLightGrey};
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.14),
    0px 11px 15px rgba(0, 0, 0, 0.2);

  @media screen and (${breakpoints.tabletSmall}) {
    max-width: 380px;
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: 400px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    max-width: 500px;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 560px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 46px;
  padding: 20px 22px 20px 18px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tabletSmall}) {
    height: 52px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 60px;
    padding: 22px;
  }

  @media screen and (${breakpoints.desktop}) {
    height: 66px;
  }
`;

export const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 18px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const CancelIcon = styled(ModalCancelIcon)`
  height: 18px;
  width: 18px;
  path {
    fill: ${colors.textSecondaryGrey};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  padding: 24px 18px 22px 18px;
  height: max-content;

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 28px 22px 22px 22px;
  }
`;

export const ModalBodyText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${colors.textSecondaryGrey};
  margin-bottom: 32px;

  @media screen and (${breakpoints.desktopSmall}) {
    margin-bottom: 44px;
    font-size: 15px;
  }

  @media screen and (${breakpoints.desktop}) {
    margin-bottom: 54px;
    font-size: 16px;
  }
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.desktopSmall}) {
    justify-content: space-around;
  }
`;

export const Button = styled(GeneralButton)`
  height: 38px;
  padding: 0 18px;
  width: max-content;

  @media screen and (${breakpoints.tabletSmall}) {
    padding: 0 22px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 40px;
    font-size: 14px;
    /* margin-left: 20px; */
  }

  @media screen and (${breakpoints.desktopSmall}) {
    height: 43px;
    font-size: 15px;
    /* margin-left: 24px; */
  }

  ${(props) =>
    props.isAcceptButton &&
    `
      border: 1px solid ${colors.buttonBorder};
      color: ${colors.buttonPrimary};
      background: ${colors.white};

      &:hover {
          color: ${colors.white};
        }
    `}
`;
