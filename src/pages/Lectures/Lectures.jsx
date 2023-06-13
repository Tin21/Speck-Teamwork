import { useEffect, useState, useContext } from 'react';
import Section from '../../components/Section/Section';
import SingleLecture from '../../components/SingleLecture/SingleLecture';
import singleLectureMock from '../../utils/mock/singleLecture';
import { Grid, GridWrapper } from '../../utils/styles/generalStyles';
import { Context } from '../../context/Context';

const Lectures = () => {
  const [lectures, setLectures] = useState(null);
  const { setContextLecture } = useContext(Context);

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
        <GridWrapper>
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
        </GridWrapper>
      </Section>
    </>
  );
};
export default Lectures;
