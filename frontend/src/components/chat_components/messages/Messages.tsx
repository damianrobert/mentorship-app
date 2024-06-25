import useGetMessages from '../../../hooks/useGetMessages';
import MessageSkeleton from '../../../components/skeletons/MessageSkeleton';
import Message from './Message';
import { MessageType } from '../../../types/messageType';
import useListenMessages from '../../../hooks/useListenMessages';

const Messages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();

  return (
    <>
      {!loading &&
        messages.length > 0 &&
        messages.map((message: MessageType) => (
          <Message key={message._id} message={message} />
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length === 0 && (
        <p className='text-center font-bold text-black'>
          Trimite un mesaj pentru a începe conversația
        </p>
      )}
    </>
  );
};

export default Messages;
