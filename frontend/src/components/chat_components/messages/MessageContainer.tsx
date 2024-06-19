import MessageInput from './MessageInput';
import Messages from './Messages';
import useConversation from '../../../zustand/useConversation';
import { useEffect } from 'react';
import MessagesHeader from './MessagesHeader';

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation }: any =
    useConversation();

  useEffect(() => {
    return () => {
      //cleanup function
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div
      className='border-4 border-red-700 flex flex-col'
      style={{ height: 'calc(100vh - 50px)' }}
    >
      {!selectedConversation ? (
        <NoConversationSelected />
      ) : (
        <div className='flex flex-col border-2 border-indigo-500 flex-grow overflow-hidden'>
          <div className='bg-slate-300 px-4 py-2 mb-2 '>
            <MessagesHeader />
          </div>

          <div className='px-4 overflow-y-scroll'>
            <Messages />
          </div>

          <div className='w-full '>
            <MessageInput />
          </div>
        </div>
      )}
    </div>
  );
};

const NoConversationSelected = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className='text-gray-600 text-4xl font-bold'>Bine ai venit!</p>
      <p className='text-gray-600 text-2xl font-semibold'>
        Selectează o conversație.
      </p>
    </div>
  );
};

export default MessageContainer;
