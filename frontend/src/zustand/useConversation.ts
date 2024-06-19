import { create } from 'zustand';
import { ConversationType } from '../types/conversationType.ts';
import { MessageType } from '../types/messageType.ts';

const useConvesration = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: ConversationType) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: MessageType) => set({ messages }),
}));

export default useConvesration;
