import React, { createContext, useState } from 'react';

const Context = createContext(['Lecture1', () => {}]);

const ContextProvider = (props) => {
  const [contextLecture, setContextLecture] = useState(
    localStorage.getItem('active_lecture')
      ? localStorage.getItem('active_lecture')
      : '',
  );
  const [showModal, setShowModal] = useState(false);

  return (
    <Context.Provider
      value={{ contextLecture, setContextLecture, showModal, setShowModal }}>
      {props.children}
    </Context.Provider>
  );
};

const ContextConsumer = Context.Consumer;

export { Context, ContextProvider, ContextConsumer };
