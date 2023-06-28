import { createContext, useState } from 'react';

const EmailContext = createContext();

const EmailProvider = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [emailData, setEmailData] = useState(null);

  const [recipients, setRecipients] = useState('');
  const [subject, setSubject] = useState('');
  const [bodyText, setBodyText] = useState('');

  return (
    <EmailContext.Provider
      value={{
        isPopupOpen,
        setIsPopupOpen,
        isMinimized,
        setIsMinimized,
        emailData,
        setEmailData,
        isDeleteOpen,
        setIsDeleteOpen,
        recipients,
        setRecipients,
        subject,
        setSubject,
        bodyText,
        setBodyText,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export { EmailContext, EmailProvider };
