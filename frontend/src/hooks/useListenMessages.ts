import { useEffect } from 'react';
import { useSocketContext } from '../context/SocketContext';
import useConversation from '../zustand/useConversation';
import { MessageType } from '../types/messageType';

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages }: any = useConversation();

  useEffect(() => {
    socket?.on('newMessage', (newMessage: MessageType) => {
      newMessage.shouldShake = true;
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off('newMessage');
  }, [socket, setMessages, messages]);
};

export default useListenMessages;
