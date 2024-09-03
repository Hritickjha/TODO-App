import React from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

const Todoitems = ({ text, id, iscomplete, deleteTodo }) => {
  return (
    <div className='flex items-center my-3 gap-2'>
      <div className='flex flex-1 items-center cursor-pointer'>
        <img src={iscomplete ? tick : not_tick} alt="status" className='w-7'/>
        <p className='text-slate-700 ml-4 text-[17px]'>{text}</p>
      </div>
      <img 
        onClick={() => deleteTodo(id)}  // Corrected here
        src={delete_icon} 
        alt="delete" 
        className='w-3.5 cursor-pointer'
      />
    </div>
  );
};

export default Todoitems;
