import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthContext, useAuthContext } from './AuthContext';
import { Socket, io } from 'socket.io-client';

const SocketContext = createContext<any>(null);

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [onlineUsers, setOnlineUsers] = useState([] as any);
  const { authUser }: any = useAuthContext();

  useEffect((): any => {
    if (authUser) {
      const socket = io('http://localhost:5000', {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on('getOnlineUsers', (users: any) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);
  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
