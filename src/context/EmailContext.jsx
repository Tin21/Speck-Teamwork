import { createContext, useState } from 'react';

const EmailContext = createContext();

const EmailProvider = (props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [emailData, setEmailData] = useState(null);

  return (
    <EmailContext.Provider
      value={{
        isPopupOpen,
        setIsPopupOpen,
        isMinimized,
        setIsMinimized,
        emailData,
        setEmailData,
      }}
    >
      {props.children}
    </EmailContext.Provider>
  );
};

export { EmailContext, EmailProvider };
