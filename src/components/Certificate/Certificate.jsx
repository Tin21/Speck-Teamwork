import React from 'react';
import propTypes from 'prop-types';
import {
  Certificate as CertificateWrapper,
  CertificateContent,
  CertificateTitle,
  CertificateSubtitle,
  CertificatePercentage,
  CertificateTitleWrapper,
  CertificateImage,
  CertificateImageWrapper,
  CertificateCheck,
  ProgressBar,
} from './CertificateStyle';
import TrophyCupImage from '../../assets/images/trophy-cup.svg';
import TrophyStarImage from '../../assets/images/trophy-star.svg';
import CertificateSuccessIcon from '../../assets/images/certificate-success-icon.svg';

const Certificate = ({ title, subtitle, percentage, isSecondary }) => {
  return (
    <CertificateWrapper>
      <CertificateContent percentage={percentage} isSecondary={isSecondary}>
        <ProgressBar percentage={percentage} isSecondary={isSecondary} />
        <CertificateTitleWrapper>
          <CertificateTitle>{title}</CertificateTitle>
          <CertificateSubtitle>{subtitle}</CertificateSubtitle>
        </CertificateTitleWrapper>
        <CertificatePercentage>{percentage}%</CertificatePercentage>
      </CertificateContent>
      <CertificateImageWrapper>
        {isSecondary ? (
          <CertificateImage
            src={TrophyStarImage}
            alt="Certificate of excellence trophy"
          />
        ) : (
          <CertificateImage src={TrophyCupImage} alt="Certificate trophy" />
        )}
        {percentage === 100 && !isSecondary && (
          <CertificateCheck
            src={CertificateSuccessIcon}
            alt="Certificate success"
          />
        )}
        {percentage >= 90 && isSecondary && (
          <CertificateCheck
            src={CertificateSuccessIcon}
            alt="Certificate success"
          />
        )}
      </CertificateImageWrapper>
    </CertificateWrapper>
  );
};

Certificate.propTypes = {
  title: propTypes.string,
  subtitle: propTypes.string,
  percentage: propTypes.number,
  isSecondary: propTypes.bool,
};

export default Certificate;
