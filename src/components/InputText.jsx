import React, { useState } from 'react';
import { IoSend } from 'react-icons/io5';

const InputText = ({ addmessage }) => {
  const [message, setMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    addmessage(message);
    setMessage('');
  };

  return (
    <div className='absolute bottom-0 left-[15%] w-3/4'>
      <form className='flex gap-4 justify-center items-center' onSubmit={sendMessage}>
        <textarea
          type="text"
          placeholder="Type a message..."
          className='w-[36%]  text-lg font-bold py-1 px-2'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className='h-12 w-12 px-3 py-2 bg-green-500 font-bold text-white flex items-center justify-center rounded-full'>
          <IoSend />
        </button>
      </form>
    </div>
  );
};

export default InputText;
