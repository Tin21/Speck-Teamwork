import styled from 'styled-components';
import { colors } from '../../../utils/styles/theme';
import { ReactComponent as ExpandMin } from './../../../assets/images/emailIcon/expandMin.svg';

export const MinimizedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.textPrimaryGrey};
  transition: height 0.3s ease;
  border-radius: 8px 8px 0 0;
`;
export const InnerWrapperMini = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
`;

export const ExpandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const MinimizedText = styled.p`
  color: ${colors.white};
  font-size: 15.435px;
  font-family: Inter;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.154px;
`;

export const ExpandedMin = styled(ExpandMin)`
  /* height: 100%;
  width: 100%; */
`;
