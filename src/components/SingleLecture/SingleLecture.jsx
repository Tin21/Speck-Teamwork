import React from 'react';
import {
  SingleLectureInner,
  SingleLectureSubtitle,
  SingleLectureTitle,
  SingleLectureWrapper,
} from './SingleLectureStyle';
import PropTypes from 'prop-types';
const SingleLecture = ({ title, subtitle }) => {
  return (
    <SingleLectureWrapper>
      <SingleLectureInner>
        <SingleLectureTitle>{title}</SingleLectureTitle>
        <SingleLectureSubtitle>{subtitle}</SingleLectureSubtitle>
        {/* <Button>treba dodat</Button> */}
      </SingleLectureInner>
    </SingleLectureWrapper>
  );
};
SingleLecture.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default SingleLecture;
