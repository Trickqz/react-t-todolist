import React from 'react';
import TodoList from './components/TodoList';
import Logos from '/logo.svg'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0EDF2] flex flex-col items-center">
      <div className='w-full h-60 absolute top-0 bg-[#E0DCE4] flex justify-center items-center'>
        <img src={Logos} alt="" />
      </div>
      <TodoList />
    </div>
  );
};

export default App;