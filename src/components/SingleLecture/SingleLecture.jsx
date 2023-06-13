import React, { useContext, createContext } from 'react';
import {
  SingleLectureInner,
  SingleLectureSubtitle,
  SingleLectureTitle,
  SingleLectureWrapper,
} from './SingleLectureStyle';
import PropTypes from 'prop-types';
import { Button } from '../../utils/styles/generalStyles';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';

const SingleLecture = ({ title, content, id }) => {
  const navigate = useNavigate();
  const { contextLecture, setContextLecture } = useContext(Context);

  const onClickActions = () => {
    navigate(`/lectures/${id}`);
    setContextLecture(`${id}. ${title}`);
    localStorage.setItem('active_lecture', `${id}. ${title}`);
  };

  return (
    <SingleLectureWrapper>
      <SingleLectureInner>
        <SingleLectureTitle>{title}</SingleLectureTitle>
        <SingleLectureSubtitle>{content}</SingleLectureSubtitle>
        <Button
          onClick={() => {
            onClickActions();
          }}
          isSecondary
        >
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
