import { create } from 'zustand';

interface Conversation {
  //TODO: Define the properties of the Conversation type
  // Define the properties of the Conversation type
  // Example: id: number;

  id: string;
  participants: string[];
  messages: Message[];
}

interface Message {
  id: string;
  content: string;
  senderId: string;
  receiverId: string;
}

const useConvesration = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: Conversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: Message) => set({ messages }),
}));

export default useConvesration;
