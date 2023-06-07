import React from 'react';
import PropTypes from 'prop-types';
import {
  AwardImg,
  DetailsFigure,
  DetailsSubtitle,
  DetailsTitle,
  LectureDetailsInner,
  LectureDetailsWrapper,
  LogoContainer,
  LogoImg,
} from './SingleLectureDetailsStyle';

const SingleLectureDetails = ({ logoImg, imageAward, title, subtitle }) => {
  return (
    <LectureDetailsWrapper>
      <LectureDetailsInner>
        <LogoContainer>
          <DetailsFigure>
            <LogoImg src={logoImg} />
            <AwardImg src={imageAward} />
          </DetailsFigure>
        </LogoContainer>
        <DetailsTitle>{title}</DetailsTitle>
        <DetailsSubtitle>{subtitle}</DetailsSubtitle>
      </LectureDetailsInner>
    </LectureDetailsWrapper>
  );
};

SingleLectureDetails.propTypes = {
  logoImg: PropTypes.string,
  imageAward: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SingleLectureDetails;
