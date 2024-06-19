import { VscSend } from 'react-icons/vsc';

const MessageInput = () => {
  return (
    <div className='sticky bottom-0 w-full'>
      <div className='w-full flex justify-around items-center p-2 py-4 bg-slate-200'>
        <input
          className='input input-sm w-[95%] text-black text-base font-semibold bg-transparent border-2 border-slate-500'
          type='text'
          placeholder='Trimite un mesaj...'
        />

        <div className='cursor-pointer'>
          <VscSend size={24} color='black' />
        </div>
      </div>
    </div>
  );
};

export default MessageInput;
