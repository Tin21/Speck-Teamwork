import React, { useContext, createContext, useState } from 'react';

const LecturesContext = createContext(['Lecture1', () => {}]);

const LecturesProvider = (props) => {
  const [contextLecture, setContextLecture] = useState(
    localStorage.getItem('active_lecture')
      ? localStorage.getItem('active_lecture')
      : '',
  );

  return (
    <LecturesContext.Provider value={{ contextLecture, setContextLecture }}>
      {props.children}
    </LecturesContext.Provider>
  );
};

const LectureConsumer = LecturesContext.Consumer;

export { LecturesContext, LecturesProvider, LectureConsumer };
