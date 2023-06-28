import { useContext } from 'react';
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

const SingleLecture = ({ description, name, id }) => {
  const navigate = useNavigate();
  const { setContextLecture } = useContext(Context);

  const onClickActions = () => {
    navigate(`/lectures/${id}`);
    setContextLecture(`${name}`);
    localStorage.setItem('active_lecture', `${name}`);
  };

  return (
    <SingleLectureWrapper>
      <SingleLectureInner>
        <SingleLectureTitle>{name}</SingleLectureTitle>
        <SingleLectureSubtitle>{description}</SingleLectureSubtitle>
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
  name: PropTypes.string,
  description: PropTypes.string,
  id: PropTypes.number,
};

export default SingleLecture;
