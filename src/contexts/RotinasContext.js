import React, { createContext, useState } from 'react';

export const RoutineContext = createContext();

const RoutineContextProvider = (props) => {
  const [routines, setRoutines] = useState([]);

  const addRoutine = (routine) => {
    routine.dayOfWeek = routine.dayOfWeek || [];
    setRoutines([...routines, routine]);
  };

  const removeRoutine = (routineId, dayId) => {
    const updatedRoutines = routines.map((routine) => {
      if (routine.id === routineId) {
        routine.dayOfWeek = routine.dayOfWeek.filter((day) => day !== dayId);
      }
      return routine;
    });
    setRoutines(updatedRoutines);
  };

  return (
    <RoutineContext.Provider value={{ routines, addRoutine, removeRoutine }}>
      {props.children}
    </RoutineContext.Provider>
  );
};

export default RoutineContextProvider;
