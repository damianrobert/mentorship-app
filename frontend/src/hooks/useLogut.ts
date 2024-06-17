import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext.js';
import toast from 'react-hot-toast';

const useLogout = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAuthUser }: any = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      localStorage.removeItem('auth-user-info');
      setAuthUser(null);
    } catch (error) {
      toast.error('Error logging out');
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
