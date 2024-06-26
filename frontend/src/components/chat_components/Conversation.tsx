import useConversation from '../../zustand/useConversation';
import { ConversationType } from '../../types/conversationType';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({
  conversation,
  lastIdx,
  emoji,
}: {
  conversation: ConversationType;
  lastIdx: boolean;
  emoji: string;
}) => {
  const { selectedConversation, setSelectedConversation }: any =
    useConversation();

  const isSelected: boolean = selectedConversation?._id === conversation._id;
  const { onlineUsers }: any = useSocketContext();
  const isOnline: boolean = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 w-full rounded px-2 py-1 cursor-pointer
        ${isSelected ? 'bg-sky-500' : ''}
        `}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? 'online' : ''}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.avatar} />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className=' font-bold text-gray-600'>
              {conversation.firstName + ' ' + conversation.lastName}{' '}
            </p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  );
};

export default Conversation;
