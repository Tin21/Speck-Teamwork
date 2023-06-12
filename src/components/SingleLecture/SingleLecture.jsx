import React from 'react';
import {
  SingleLectureInner,
  SingleLectureSubtitle,
  SingleLectureTitle,
  SingleLectureWrapper,
} from './SingleLectureStyle';
import PropTypes from 'prop-types';
import { Button } from '../../utils/styles/generalStyles';
import { useNavigate } from 'react-router-dom';

const SingleLecture = ({ title, content, id }) => {
  const navigate = useNavigate();

  return (
    <SingleLectureWrapper>
      <SingleLectureInner>
        <SingleLectureTitle>{title}</SingleLectureTitle>
        <SingleLectureSubtitle>{content}</SingleLectureSubtitle>
        <Button onClick={() => navigate(`/lectures/${id}`)} isSecondary>
          View
        </Button>
      </SingleLectureInner>
    </SingleLectureWrapper>
  );
};

SingleLecture.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.number,
};

export default SingleLecture;
