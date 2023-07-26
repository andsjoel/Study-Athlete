import React, { useContext } from 'react';
import { RoutineContext } from '../../contexts/RotinasContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "../../styles/ProfileStyle/Rotinas.css"

const daysOfWeek = [
  { id: 1, name: 'Segunda' },
  { id: 2, name: 'Terça' },
  { id: 3, name: 'Quarta' },
  { id: 4, name: 'Quinta' },
  { id: 5, name: 'Sexta' },
  { id: 6, name: 'Sábado' },
  { id: 7, name: 'Domingo' },
];

const RoutineList = () => {
  const { routines, removeRoutine } = useContext(RoutineContext);

  // Função para filtrar as rotinas por dia da semana
  const filterRoutinesByDay = (dayId) => {
    return routines.filter((routine) => routine.dayOfWeek.includes(dayId));
  };

  return (
    <div className='list-rotinas'>
      {daysOfWeek.map((day) => (
        <div className='content-rotinas' key={day.id}>
          <h2>{day.name}</h2>
          <div className='table'>
            <div className='sub-title'>
              <p>Tarefa</p>
              <p>Horário</p>
              <p>Duração</p>
            </div>
            <div>
              {filterRoutinesByDay(day.id).map((routine) => (
                <div className='rotina' key={routine.id}>
                  <div className='rotina1'>
                    <p>{routine.title}</p>
                    <p>{routine.time}</p>
                    <p>{routine.duration} min</p>
                  </div>
                  <div className='rotina2'>
                    <p>Descrição: {routine.description}</p>
                    <button onClick={() => removeRoutine(routine.id, day.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoutineList;
