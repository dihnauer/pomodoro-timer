import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { CyclesContext } from '../../../../contexts/CyclesContext';

import { FormContainer, MinutesAmountInput, TaskInput } from './styles';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor='task'>Vou trabalhar em</label>
      <TaskInput
        type='text'
        id='task'
        list='task-suggestion'
        placeholder='Dê um nome para a sua tarefa'
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id='task-suggestion'>
        <option value='Sugestão de tarefa 01' />
        <option value='Sugestão de tarefa 02' />
        <option value='Sugestão de tarefa 03' />
        <option value='Sugestão de tarefa 04' />
      </datalist>

      <label htmlFor='minutesAmount'>durante</label>
      <MinutesAmountInput
        type='number'
        id='minutesAmout'
        placeholder='00'
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  );
}
