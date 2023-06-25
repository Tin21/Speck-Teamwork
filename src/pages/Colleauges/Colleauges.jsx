import { useContext } from 'react';
import ColleaguesTable from '../../components/ColleaguesTable/ColleaguesTable';
import { MinimizeEmail } from '../../components/ColleaguesTable/MinimizeEmail/MinimizeEmail';
import Section from '../../components/Section/Section';
import { EmailContext } from '../../context/EmailContext';

const Colleauges = () => {
  const {
    isPopupOpen,
    setIsPopupOpen,
    isMinimized,
    setIsMinimized,
    emailData,
    setEmailData,
  } = useContext(EmailContext);
  return (
    <>
      <Section isFlexDisplay={false} title={'List of your colleagues'}>
        <ColleaguesTable />
        {isMinimized && <MinimizeEmail />}
      </Section>
    </>
  );
};

export default Colleauges;
