import { useState, useEffect } from 'react';

import Section from '../components/Section/Section';
import { Grid } from '../utils/styles/generalStyles';
import cardsDetailData from '../utils/mock/lectureDetails';
import SingleLectureDetails from '../components/SingleLectureDetails/SingleLectureDetails';

const LectureDetails = () => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setDetail(cardsDetailData);
    }, 1000);
  }, []);

  return (
    <>
      <Section isFlexDisplay={false} title={'My lectures'}>
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
