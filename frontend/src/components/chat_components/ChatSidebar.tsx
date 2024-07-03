import SearchInput from '../SearchInput';
import Conversations from './Conversations';

const ChatSidebar = () => {
  return (
    <div>
      <div className='p-1'>
        <SearchInput />
      </div>
      <div className='divider px-3'></div>

      <Conversations />
    </div>
  );
};

export default ChatSidebar;
