import { useEffect, useState, useContext } from 'react';
import Section from '../../components/Section/Section';
import SingleLecture from '../../components/SingleLecture/SingleLecture';
import singleLectureMock from '../../utils/mock/singleLecture';
import { Grid } from '../../utils/styles/generalStyles';
import { LecturesContext } from '../../context/LecturesContext';

const Lectures = () => {
  const [lectures, setLectures] = useState(null);
  const { contextLecture, setContextLecture } = useContext(LecturesContext);

  useEffect(() => {
    setTimeout(() => {
      setLectures(singleLectureMock);
    }, 1000);
  }, []);

  useEffect(() => {
    setContextLecture('');
  });

  return (
    <>
      <Section isFlexDisplay={false} title={'Your lectures'}>
        {lectures && (
          <Grid>
            {lectures.map((lecture) => (
              <SingleLecture
                key={lecture.id}
                title={lecture.title}
                content={lecture.content}
                id={lecture.id}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};
export default Lectures;
