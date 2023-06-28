import styled from 'styled-components';
import { breakpoints, colors } from '../../../utils/styles/theme';
import { ReactComponent as CloseDelete } from './../../../assets/images/emailIcon/closeDelete.svg';

export const DeleteModalBackground = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${colors.bgModalOpaque};
    z-index: -1;
    opacity: 20%;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
  z-index: 2;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;

export const HeaderDelete = styled.div`
  display: flex;
  background-color: ${colors.bgSecondary};
  color: ${colors.bgSecondary};
  border-radius: 8px 8px 0 0;
  padding: 14px 16px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dedede;
`;

export const HeaderDeleteText = styled.div`
  font-size: 16px;
  font-family: Inter;
  font-weight: 600;
  line-height: 130%;
  color: ${colors.textPrimaryGrey};
`;

export const DeleteBody = styled.div`
  padding: 28px 16px;
`;

export const DeleteBodyText = styled.div`
  font-size: 14px;
  font-family: Inter;
  line-height: 140%;
  color: ${colors.textSecondary};
`;

export const DeleteFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 20px 22px 26px;
`;

export const KeepEditingButton = styled.button`
  color: ${colors.bgSecondary};
  background-color: ${colors.redPrimary};
  font-size: 15px;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 48px;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  order: 1;
  ${(props) =>
    props.textEdit &&
    `
    &::after{
      content:'Keep editing'
    }
  `}

  @media screen and (${breakpoints.tablet}) {
    color: ${colors.textPrimaryGrey};
    border: none;
    background-color: ${colors.bgMenuItem};

    order: 0;
    ${(props) =>
      props.textEdit &&
      `
      &::after{
      content:'Cancel'
    }
  `}
  }
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  color: ${colors.redPrimary};
  border-radius: 48px;
  border: 1px solid ${colors.buttonBorder};
  background-color: ${colors.bgSecondary};
  cursor: pointer;
  order: 0;
  ${(props) =>
    props.textDelete &&
    `
    &::after{
      content:'Delete'
    }
  `}

  @media screen and (${breakpoints.tablet}) {
    padding: 12px 24px;
    color: ${colors.bgSecondary};
    background-color: ${colors.redPrimary};
    font-size: 15px;
    font-weight: 600;
    border: none;
    white-space: nowrap;
    order: 1;

    cursor: pointer;
    ${(props) =>
      props.textDelete &&
      `
      &::after{
      content:'Delete message'
    }
  `}
  }
`;

export const CloseDeleteContainer = styled(CloseDelete)`
  cursor: pointer;
`;
