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
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 46px;
  padding: 20px 22px 20px 18px;
  border-bottom: 1px solid #dedede;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.p`
  font-weight: 600;
  font-size: 16px;
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
  padding: 28px 18px 22px 18px;
  height: max-content;
`;

export const ModalBodyText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  color: ${colors.textSecondaryGrey};
  margin-bottom: 32px;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled(GeneralButton)`
  height: 38px;
  padding: 0 22px;
  width: max-content;

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
