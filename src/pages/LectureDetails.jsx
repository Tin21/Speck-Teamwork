import { useState, useEffect } from 'react';

import Section from '../components/Section/Section';
import { Grid } from '../utils/styles/generalStyles';
import cardsDetailData from '../utils/mock/lectureDetails';
import SingleLectureDetails from '../components/SingleLectureDetails/SingleLectureDetails';
import singleLectureMock from '../utils/mock/singleLecture';
import { useParams } from 'react-router-dom';
import {
  LectureDetailsContent,
  LectureDetailsTitle,
  LectureDetailsWrapper,
} from '../components/SingleLectureDetails/SingleLectureDetailsStyle';

const LectureDetails = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState(null);
  const [lectures, setLectures] = useState(null);
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDetail(cardsDetailData);
      setLectures(singleLectureMock);
    }, 1000);
  }, []);

  useEffect(() => {
    lectures &&
      setLecture(lectures.find((lecture) => lecture.id === parseInt(id)));
  }, [lectures]);

  return (
    <>
      <Section isFlexDisplay={false}>
        <LectureDetailsWrapper>
          <LectureDetailsTitle>{lecture?.title}</LectureDetailsTitle>
          <LectureDetailsContent>{lecture?.content}</LectureDetailsContent>
        </LectureDetailsWrapper>

        {detail && (
          <Grid isAwards>
            {detail.map((detail) => (
              <SingleLectureDetails
                key={detail.id}
                title={detail.title}
                subtitle={detail.subtitle}
                imageAward={detail.imageAward}
                logoImg={detail.logoImage}
                id={detail.id}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default LectureDetails;
