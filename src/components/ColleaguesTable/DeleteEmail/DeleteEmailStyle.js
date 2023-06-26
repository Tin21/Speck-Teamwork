import styled from 'styled-components';
import { colors } from '../../../utils/styles/theme';

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
  background-color: ${colors.white};
  color: ${colors.white};
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
  color: ${colors.textSecondaryGrey};
`;

export const DeleteFooter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 0 20px 22px 26px;
`;
