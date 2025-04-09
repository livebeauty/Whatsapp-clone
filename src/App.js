import React from 'react';
import "./style.css";
import ChatContainer from './components/ChatContainer';

const App = () => {
  return (
    <div className="bg-[url('./img/1b.jpeg')] w-full min-h-screen object-cover px-2 relative">
      <h1 className='text-6xl text-center text-white font-bold'>Kiachat</h1>
      <ChatContainer />
    </div>
  );
};

export default App;
