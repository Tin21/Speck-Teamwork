import { useContext, useState } from 'react';
import ColleaguesTable from '../../components/ColleaguesTable/ColleaguesTable';
import { MinimizeEmail } from '../../components/ColleaguesTable/MinimizeEmail/MinimizeEmail';
import Section from '../../components/Section/Section';
import { EmailContext } from '../../context/EmailContext';
import DeleteEmail from '../../components/ColleaguesTable/DeleteEmail/DeleteEmail';
import { Context } from '../../context/Context';
import Toast from '../../components/Toast/Toast';

const Colleauges = () => {
  const {
    isMinimized,

    isDeleteOpen,
  } = useContext(EmailContext);
  const { showToast, deleteMessage, submitMessage } = useContext(Context);

  return (
    <>
      <Section isFlexDisplay={false} title={'List of your colleagues'}>
        {deleteMessage && showToast && (
          <Toast title="Email Deleted" subtitle="The email has been deleted." />
        )}
        {submitMessage && showToast && (
          <Toast
            title="Success"
            subtitle="Email successfully sent to your colleague"
          />
        )}
        <ColleaguesTable />
        {isMinimized && <MinimizeEmail />}
        {isDeleteOpen && <DeleteEmail />}
      </Section>
    </>
  );
};

export default Colleauges;
