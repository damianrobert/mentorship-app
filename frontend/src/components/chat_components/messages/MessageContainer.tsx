import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer = () => {
  return (
    <div className='h-screen flex flex-col'>
      {/* Header */}
      <div className='bg-slate-300 px-4 py-2 mb-2 sticky top-0 z-50'>
        <span className='label-text text-gray-600'>Către:</span>{' '}
        <span className='text-gray-900 font-bold'> John Doe</span>
      </div>

      <Messages />

      <MessageInput />
    </div>
  );
};

export default MessageContainer;
