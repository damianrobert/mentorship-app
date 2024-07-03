import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages }: any = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage: any) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
