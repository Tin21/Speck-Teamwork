import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const EmailContainer = styled.div`
  position: fixed;
  top: 25%;
  left: 25%;
  height: 50%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  box-sizing: border-box;
`;

export const EmailHeader = styled.div`
  display: flex;
  background-color: ${colors.textPrimaryGrey};
  height: 40px;
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  color: ${colors.white};
  align-items: center;
  padding: 12px 16px;
`;

export const EmailBody = styled.div`
  height: 50%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
`;

export const Recipients = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 11px 0;
`;
export const Subject = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 11px 0;
`;
export const BodyText = styled.div`
  color: ${colors.textSecondary};
  padding: 11px 0;
`;
