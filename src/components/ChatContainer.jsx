import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import UserLogin from './UserLogin';
import ChatBoxReciever, { ChatBoxSender } from './ChatBox';
import InputText from './InputText';

const ChatContainer = () => {
  const socketio = socketIOClient("http://localhost:4200");

  const [chat, setChats] = useState([]);
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [avatar, setAvatar] = useState(localStorage.getItem("avatar"));

  useEffect(() => {
    socketio.on("chat", (newChat) => {
      setChats((prevChats) => [...prevChats, newChat]);
    });

    return () => {
      socketio.off("chat");
    };
  }, [socketio]);

  const sendChatToSocket = (chat) => {
    socketio.emit("chat", chat);
  };

  const addMessage = (message) => {
    const newChat = { message, user, avatar };
    sendChatToSocket(newChat);
    setChats((prevChats) => [...prevChats, newChat]);
  };

  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    setUser("");
    setAvatar("");
  };

  const chatList = () => {
    return chat.map((chatItem, index) => {
      if (chatItem.user === user) {
        return <ChatBoxReciever 
          key={index}
          message={chatItem.message}
          avatar={chatItem.avatar}
          user={chatItem.user}
        />;
      }
      return <ChatBoxSender
        key={index}
        message={chatItem.message}
        avatar={chatItem.avatar}
        user={chatItem.user}
      />;
    });
  };

  return (
    <>
      {
        user ? 
        <div>
          <div className='flex flex-row justify-between'>
            <h2 className='text-2xl font-bold text-white'>Username: {user}</h2>
            <p onClick={Logout} className='text-2xl font-bold text-white cursor-pointer hover:text-black transition-all'>Logout</p>
          </div>
          <div className='flex flex-col gap-4'>{chatList()}</div>
          <InputText addmessage={addMessage}/>
        </div> :
        <UserLogin setUser={setUser}/>
      }
    </>
  );
};

export default ChatContainer;
