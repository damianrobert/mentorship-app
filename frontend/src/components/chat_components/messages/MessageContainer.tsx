import MessageInput from './MessageInput';
import Messages from './Messages';
import useConversation from '../../../zustand/useConversation';
import { useEffect } from 'react';
import MessagesHeader from './MessagesHeader';
import { useAuthContext } from '../../../context/AuthContext';

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
    <div className='flex flex-col' style={{ height: 'calc(100vh - 50px)' }}>
      {!selectedConversation ? (
        <NoConversationSelected />
      ) : (
        <div className='flex flex-col flex-grow overflow-hidden'>
          <div className='bg-slate-300 px-4 py-2 mb-2 '>
            <MessagesHeader
              toUser={
                selectedConversation.firstName +
                ' ' +
                selectedConversation.lastName
              }
            />
          </div>

          <div className='px-4 overflow-y-scroll h-full'>
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
  const { authUser }: any = useAuthContext();
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <p className='text-gray-600 text-4xl font-bold'>
        Bine ai venit, {authUser.username}!
      </p>
      <p className='text-gray-600 text-2xl font-semibold'>
        Selectează o conversație.
      </p>
    </div>
  );
};

export default MessageContainer;
