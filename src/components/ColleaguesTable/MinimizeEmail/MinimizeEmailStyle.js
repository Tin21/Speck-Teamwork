import styled from 'styled-components';
import { breakpoints, colors } from '../../../utils/styles/theme';
import { ReactComponent as ExpandMin } from './../../../assets/images/emailIcon/expandMin.svg';

export const MinimizedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${colors.textPrimaryGrey};
  transition: height 0.3s ease;
  border-radius: 8px 8px 0 0;

  @media screen and (${breakpoints.tablet}) {
    left: auto;
    width: 320px;
    right: 72px;
  }
`;
export const InnerWrapperMini = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;

  @media screen and (${breakpoints.tablet}) {
    padding: 8px 18px;
  }
`;

export const ExpandWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;

export const MinimizedText = styled.p`
  color: ${colors.bgSecondary};
  font-size: 15.435px;
  font-family: Inter;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.154px;

  ${(props) =>
    props.miniLeftRounded &&
    `
    display:none;
    @media screen and (${breakpoints.tablet}) {
      display:block;
      padding:8px 12px;
      border-radius:48px;
      border:1px solid ${colors.buttonBorder}
      }
  `}
`;

export const MinimizedButton = styled.button`
  display: none;
  @media screen and (${breakpoints.tablet}) {
    display: block;
    padding: 8px 12px;
    border-radius: 48px;
    border: 1px solid ${colors.buttonBorder};
    background-color: ${colors.textPrimaryGrey};
    color: ${colors.bgSecondary};
    cursor: pointer;
  }
`;

export const ExpandedMin = styled(ExpandMin)``;
