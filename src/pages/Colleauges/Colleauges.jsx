import ColleaguesTable from '../../components/ColleaguesTable/ColleaguesTable';
import { Section } from '../../components/Section/SectionStyle';

const Colleauges = () => {
  return (
    <>
      <Section isFlexDisplay={false} title={'List of your colleagues'}>
        <ColleaguesTable />
      </Section>
    </>
  );
};

export default Colleauges;
