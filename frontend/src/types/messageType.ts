interface MessageType {
  _id: string;
  message: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
  updatedAt: string;
}

export type { MessageType };
