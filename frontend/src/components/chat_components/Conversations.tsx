import useGetConversations from '../../hooks/useGetConversations';
import Conversation from './Conversation';
import { ConversationType } from '../../types/conversationType';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  console.log(conversations);
  return (
    <div className='py-2 flex flex-col h-screen overflow-y-scroll'>
      {conversations.map((conversation: ConversationType, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastIdx={idx == conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className='loading loading-spinner mx-auto'></span>
      ) : null}
    </div>
  );
};

export default Conversations;
