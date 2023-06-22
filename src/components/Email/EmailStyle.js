import styled from 'styled-components';
import { colors, breakpoints, fonts } from '../../utils/styles/theme';

export const EmailContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 620px;
  top: 25%;
  right: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  /* border: 1px solid #ccc; */
  /* background-color: red; */
`;

export const EmailHeader = styled.div`
  display: flex;
  background-color: ${colors.textPrimaryGrey};
  border-radius: 8px 8px 0px 0px;
  width: 100%;
  color: ${colors.white};
  padding: 12px 16px;
  align-items: center;
  justify-content: space-between;
`;

export const EmailHeaderText = styled.p`
  font-size: 14px;
  font-family: Inter;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.14px;
  color: ${colors.white};
`;

export const MinCloseWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const EmailBody = styled.div`
  height: 430px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  border-radius: 0 0 8px 8px;
`;

export const Recipients = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 10px 0 8px 0;
`;

export const Subject = styled.div`
  color: ${colors.textSecondary};
  border-bottom: 1px solid #edeff1;
  padding: 10px 0 8px 0;
`;

export const BodyTextWrapper = styled.div`
  height: 80%;
`;
export const BodyText = styled.p`
  padding: 10px 0 8px 0;
  color: ${colors.textSecondary};
`;

export const EmailFooterWrapper = styled.div`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    background-color: rgba(202, 202, 202, 0.2);
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 12px 48px;
    /* gap: 72px; */
    border: 1px solid #ccc;
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonWrapper = styled.div`
  width: 128px;
`;

export const MultipleIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 252px;
`;
