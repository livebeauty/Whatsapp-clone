import React from 'react';
import { Avatar, Image } from "antd";

export default function ChatBoxReciever({ avatar, user, message }) {
  return (
    <div className='flex justify-start flex-row gap-4'>
      <Avatar
        size={50}
        src={<Image
          src={avatar}
          className='object-cover w-12 h-12 rounded-[100%]'
          preview={false}
        />}
      />

      <div className='px-3 py-2 bg-sky-400 rounded-xl max-w-96'>
        <strong className='font-semibold text-lg'>
          {user}
        </strong> <br />
        <span className='text-white'>
          {message}
        </span>
      </div>
    </div>
  );
}

export function ChatBoxSender({ avatar, user, message }) {
  return (
    <div className='flex justify-end flex-row gap-4'>
      <div className='px-3 py-2 bg-purple-500 rounded-xl max-w-96'>
        <strong className='font-bold'>
          {user}
        </strong> <br />
        <span className='text-white'>
          {message}
        </span>
      </div>

      <Avatar
        size={50}
        src={<Image
          src={avatar}
          className='object-cover w-11 h-11 rounded-[100%]'
          preview={false}
        />}
      />
    </div>
  );
}
