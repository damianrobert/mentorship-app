import ChatSidebar from '../../components/chat_components/ChatSidebar';
import MessageContainer from '../../components/chat_components/messages/MessageContainer';
import Navbar from '../../components/Navbar';

const Chat = () => {
  return (
    <div className='flex flex-col bg-slate-100'>
      <Navbar />
      <div
        className='flex overflow-hidden'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <div className='flex flex-col w-3/12'>
          <ChatSidebar />
        </div>

        <div className='bg-slate-200 w-9/12'>
          <MessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Chat;
