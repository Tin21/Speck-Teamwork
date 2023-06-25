import ColleaguesTable from '../../components/ColleaguesTable/ColleaguesTable';
import { MinimizeEmail } from '../../components/ColleaguesTable/MinimizeEmail/MinimizeEmail';
import Section from '../../components/Section/Section';

const Colleauges = () => {
  return (
    <>
      <Section isFlexDisplay={false} title={'List of your colleagues'}>
        <ColleaguesTable />
        <MinimizeEmail />
      </Section>
    </>
  );
};

export default Colleauges;
