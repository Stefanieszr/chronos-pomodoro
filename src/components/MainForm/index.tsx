import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import { useState } from 'react';

export function MainForm() {
  const [taskName, setTaskName] = useState('');
  function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log('deu certo');
  }
  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='inputTask'
          type='text'
          title='tarefa'
          placeholder='Digite algo'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        ></DefaultInput>
      </div>

      <div className='formRow'>
        <p>Proximo intervalo é de 25</p>
      </div>

      <div className='formRow'>
        <Cycles></Cycles>
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
