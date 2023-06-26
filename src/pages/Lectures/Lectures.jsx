import { useEffect, useState, useContext } from 'react';
import Section from '../../components/Section/Section';
import SingleLecture from '../../components/SingleLecture/SingleLecture';
import { Grid, GridWrapper } from '../../utils/styles/generalStyles';
import { Context } from '../../context/Context';
import { getAllLectures } from '../../api/lectures';
import { ThreeDots } from 'react-loader-spinner';

const Lectures = () => {
  const [lectures, setLectures] = useState(null);
  const { setContextLecture } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const allLectures = await getAllLectures(localStorage.getItem('jwt_token'));
    setLectures(allLectures);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setContextLecture('');
  });

  return (
    <>
      <Section isFlexDisplay={false} title={'Your lectures'}>
        {isLoading ? (
          <ThreeDots
            color="#af6118"
            wrapperStyle={{
              justifyContent: 'center',
            }}
          />
        ) : (
          <GridWrapper>
            {lectures && (
              <Grid>
                {lectures.map((lecture) => (
                  <SingleLecture
                    key={lecture.id}
                    name={lecture.name}
                    description={lecture.description}
                    id={lecture.id}
                  />
                ))}
              </Grid>
            )}
          </GridWrapper>
        )}
      </Section>
    </>
  );
};
export default Lectures;
