import React from 'react';
import propTypes from 'prop-types';
import {
  CourseProgressTitle,
  CourseProgress as CourseProgressWrapper,
  Grid,
} from './CourseProgressStyle';
import Certificate from '../Certificate/Certificate';

const CourseProgress = ({
  firstPercentage,
  secondPercentage,
  title,
  firstCertificateTitle,
  firstCertificateSubtitle,
  secondCertificateTitle,
  secondCertificateSubtitle,
}) => {
  return (
    <CourseProgressWrapper>
      <CourseProgressTitle>{title}</CourseProgressTitle>
      <Grid>
        <Certificate
          title={firstCertificateTitle}
          subtitle={firstCertificateSubtitle}
          percentage={firstPercentage}
        />
        <Certificate
          title={secondCertificateTitle}
          subtitle={secondCertificateSubtitle}
          percentage={secondPercentage}
          isSecondary
        />
      </Grid>
    </CourseProgressWrapper>
  );
};

CourseProgress.propTypes = {
  firstPercentage: propTypes.number,
  secondPercentage: propTypes.number,
  title: propTypes.string,
  firstCertificateTitle: propTypes.string,
  firstCertificateSubtitle: propTypes.string,
  secondCertificateTitle: propTypes.string,
  secondCertificateSubtitle: propTypes.string,
};

export default CourseProgress;
