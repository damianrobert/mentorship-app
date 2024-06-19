import { useState } from 'react';
import { VscSend } from 'react-icons/vsc';
import useSendMessage from '../../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');
  const { loading, sendMessage }: any = useSendMessage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    await sendMessage(message);
    setMessage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex justify-around items-center p-2 py-4 bg-slate-200'>
        <input
          className='input input-sm w-[95%] text-black text-base font-semibold bg-transparent border-2 border-slate-500'
          type='text'
          placeholder='Trimite un mesaj...'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type='submit' className='cursor-pointer'>
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <VscSend size={24} color='black' />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
