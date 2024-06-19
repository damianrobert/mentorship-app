import { MessageType } from './messageType';

interface ConversationType {
  _id: string;
  participants: string[];
  messages: MessageType[];
  firstName: string;
  lastName: string;
  avatar: string;
  emoji: string;
}

export type { ConversationType };
