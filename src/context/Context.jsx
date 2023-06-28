import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const Context = createContext(['Lecture1', () => {}]);

const ContextProvider = (props) => {
  const [contextLecture, setContextLecture] = useState(
    localStorage.getItem('active_lecture')
      ? localStorage.getItem('active_lecture')
      : '',
  );
  const [showToast, setShowToast] = useState(false); //dok je true Toast je prikazan
  const [showModal, setShowModal] = useState(false); //na true Modal je prikazan, na false je zatvoren
  const [modalAccept, setModalAccept] = useState(false); //postavlja se na true kada se pritisne Accept(lijevi) gumb u Modalu
  const [usersTable, setUsersTable] = useState(null);

  const [deleteMessage, setDeleteMessage] = useState(false);

  const [submitMessage, setSubmitMessage] = useState(false);

  return (
    <Context.Provider
      value={{
        contextLecture,
        setContextLecture,
        showToast,
        setShowToast,
        showModal,
        setShowModal,
        modalAccept,
        setModalAccept,
        usersTable,
        setUsersTable,
        deleteMessage,
        setDeleteMessage,
        submitMessage,
        setSubmitMessage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;

ContextProvider.propTypes = {
  children: PropTypes.node,
};

export { Context, ContextProvider, ContextConsumer };
