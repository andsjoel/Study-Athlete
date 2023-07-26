import React, { useState, useContext } from 'react';
import { RoutineContext } from '../../contexts/RotinasContext';
import { generateUUID } from '../../utils/uuid';
import "../../styles/ProfileStyle/Form.css"

const daysOfWeek = [
  { id: 1, name: 'Segunda' },
  { id: 2, name: 'Terça' },
  { id: 3, name: 'Quarta' },
  { id: 4, name: 'Quinta' },
  { id: 5, name: 'Sexta' },
  { id: 6, name: 'Sábado' },
  { id: 7, name: 'Domingo' },
];

const RoutineForm = () => {
  const { addRoutine } = useContext(RoutineContext);

  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDays, setSelectedDays] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar se os campos são válidos antes de adicionar a rotina
    if (!validateForm()) {
      return;
    }
    const routine = {
      id: generateUUID(),
      title,
      time,
      duration,
      description,
      dayOfWeek: selectedDays,
    };
    addRoutine(routine);
    // Limpar os campos do formulário após a adição da rotina
    setTitle('');
    setTime('');
    setDuration('');
    setDescription('');
    setSelectedDays([]);
  };

  // Função para validar o formulário
  const validateForm = () => {
    // Implemente suas validações aqui
    const errors = [];

    if (title.length > 15) {
      errors.push('O título deve ter no máximo 15 caracteres.');
    }

    // Validação do horário
    const timePattern = /^(0[6-9]|1\d|2[0-2]):([0-5]\d)$/;
    if (!timePattern.test(time)) {
      errors.push('O horário deve estar no formato HH:mm e ser entre 06:00 e 22:45.');
    }

    // Validação da duração
    const durationNum = parseInt(duration);
    if (isNaN(durationNum) || durationNum < 5 || durationNum > 300) {
      errors.push('A duração deve ser um número entre 5 e 120 minutos.');
    }

    if (description.length > 30) {
      errors.push('A descrição deve ter no máximo 30 caracteres.');
    }

    if (selectedDays.length === 0) {
      errors.push('Selecione pelo menos um dia da semana.');
    }

    if (errors.length > 0) {
      alert(errors.join('\n'));
      return false;
    }

    return true;
  };

  const handleDayClick = (dayId) => {
    if (selectedDays.includes(dayId)) {
      setSelectedDays(selectedDays.filter((day) => day !== dayId));
    } else {
      setSelectedDays([...selectedDays, dayId]);
    }
  };

  return (

    <form onSubmit={handleSubmit} className='form'>
      <div>
        <h2>Nova Tarefa</h2>
        <label>Título:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} maxLength={15} />
        <label>Horário:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          min="06:00"
          max="22:45"
        />
        <label>Duração (minutos):</label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          min="5"
          max="300"
          step="5" // 5 minutos
        />
        <button type="submit">Salvar</button>
      </div>
      <div  className='second-table'>
        <label>Descrição:</label>
        <textarea
          className='description'
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={30}
        />
        <label>Dia da semana:</label>
        {daysOfWeek.map((day) => (
          <label className='weeks' key={day.id}>
            {day.name}
            <input
              className='checkbox'
              type="checkbox"
              value={day.id}
              checked={selectedDays.includes(day.id)}
              onChange={() => handleDayClick(day.id)}
            />
        </label>
        ))}
      </div>
    </form>
  );
};

export default RoutineForm;
