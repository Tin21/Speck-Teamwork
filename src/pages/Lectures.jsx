import Section from '../components/Section/Section';
import { Button } from '../utils/styles/generalStyles';

const Lectures = () => {
  return (
    <>
      <Section
        isFlexDisplay={false}
        title={'Your lectures'}
        subtitle={'Lorem ipsum sit dolor amet bl abla'}
      >
        <Button isVariant>Cancel</Button>
      </Section>
    </>
  );
};

export default Lectures;
