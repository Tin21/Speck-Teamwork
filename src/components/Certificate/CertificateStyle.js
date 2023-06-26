import styled from 'styled-components';
import { colors, breakpoints } from '../../utils/styles/theme';

export const Certificate = styled.div`
  text-align: center;
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    flex-direction: row;
  }
`;

export const CertificateContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${colors.bgMenuItem};
  border: 1px solid
    ${(props) => {
      if (props.isSecondary && props.percentage > 0) {
        return colors.orangeBorder;
      } else {
        return props.percentage > 0 ? colors.greenSuccess : colors.grayBorder;
      }
    }};
  height: 64px;
  border-radius: 5px;
  margin-bottom: 16px;

  @media screen and (${breakpoints.tablet}) {
    width: 100%;
    margin-right: 16px;
    margin-top: auto;
    margin-bottom: auto;
  }
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: ${(props) =>
    props.percentage === 100 ? '4px' : '4px 0 0 4px'};
  width: ${(props) => props.percentage + '%'};
  background-color: ${(props) =>
    props.isSecondary ? colors.lightOrange : colors.lightGreen};
  z-index: 1;
`;

export const CertificateTitleWrapper = styled.div`
  justify-content: center;
  margin-left: 16px;
  z-index: 2;
`;

export const CertificateTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

export const CertificateSubtitle = styled.p`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  color: ${colors.greyBody};
`;

export const CertificatePercentage = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: right;
  margin-left: auto;
  display: flex;
  align-items: center;
  color: ${colors.textSecondary};
  margin-right: 8px;
  z-index: 2;
`;

export const CertificateImage = styled.img`
  height: 81px;
  width: 54px;
`;

export const CertificateCheck = styled.img`
  height: 45px;
  width: 45px;
  position: absolute;
  top: 18%;
  left: 52%;
  transform: translate(-50%, -50%);

  @media screen and (${breakpoints.tablet}) {
    left: 69%;
  }
`;

export const CertificateImageWrapper = styled.div`
  position: relative;
`;
