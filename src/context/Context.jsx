import React, { createContext, useState } from 'react';

const Context = createContext(['Lecture1', () => {}]);

const ContextProvider = (props) => {
  const [contextLecture, setContextLecture] = useState(
    localStorage.getItem('active_lecture')
      ? localStorage.getItem('active_lecture')
      : '',
  );
  const [showModal, setShowModal] = useState(false); //na true Modal je prikazan, na false je zatvoren
  const [modalAccept, setModalAccept] = useState(false); //postavlja se na true kada se pritisne Accept(lijevi) gumb u Modalu

  return (
    <Context.Provider
      value={{
        contextLecture,
        setContextLecture,
        showModal,
        setShowModal,
        modalAccept,
        setModalAccept,
      }}>
      {props.children}
    </Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
