import { useAuthContext } from '../../../context/AuthContext';
import { extractTime } from '../../../utils/extractTime';
import useConversation from '../../../zustand/useConversation';

const Message = ({ message }: { message: any }) => {
  const { authUser }: any = useAuthContext();
  const { selectedConversation }: any = useConversation();
  const fromMe: boolean = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const avatar = fromMe ? authUser.avatar : selectedConversation?.avatar;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : 'bg-gray-600';
  const shakeClass = message.shouldShake ? 'shake' : '';
  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={avatar} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor} ${shakeClass}`}
      >
        {message.message}
      </div>
      <div className='chat-footer opacity-60 font-semibold text-gray-700 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
