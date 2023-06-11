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
  AwardWrapper,
  AwardText,
} from './SingleLectureDetailsStyle';

const SingleLectureDetails = ({
  logoImg,
  imageAward,
  title,
  subtitle,
  awardPoint,
}) => {
  return (
    <DetailsWrapper>
      <DetailsInner>
        <DetailsFigure>
          <LogoImg src={logoImg} />
          <AwardWrapper>
            <AwardImg src={imageAward} />
            <AwardText>{awardPoint}</AwardText>
          </AwardWrapper>
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
  awardPoint: PropTypes.string,
};

export default SingleLectureDetails;
