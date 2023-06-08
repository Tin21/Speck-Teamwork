import React from 'react';
import PropTypes from 'prop-types';
import {
  AwardImg,
  DetailsFigure,
  DetailsSubtitle,
  DetailsTitle,
  DetailsInner,
  DetailsWrapper,
  LogoImg,
} from './SingleLectureDetailsStyle';

const SingleLectureDetails = ({ logoImg, imageAward, title, subtitle }) => {
  return (
    <DetailsWrapper>
      <DetailsInner>
        <DetailsFigure>
          <LogoImg src={logoImg} />
          <AwardImg src={imageAward} />
        </DetailsFigure>
        <DetailsTitle>{title}</DetailsTitle>
        <DetailsSubtitle>{subtitle}</DetailsSubtitle>
      </DetailsInner>
    </DetailsWrapper>
  );
};

SingleLectureDetails.propTypes = {
  logoImg: PropTypes.string,
  imageAward: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SingleLectureDetails;
