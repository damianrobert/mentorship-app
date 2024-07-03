import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const authContext = useAuthContext();

  const login = async (email: string, password: string) => {
    const success = handleInputErrors(email, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data);
      if (data.error) throw new Error(data.error);

      localStorage.setItem('auth-user-info', JSON.stringify(data));
      authContext!.setAuthUser(data);

      toast.success(`V-ați logat cu succes ca ${data.username}`);
    } catch (error: any) {
      if (error.message === 'Invalid username or password') {
        toast.error('Email sau parolă greșită!');
      } else toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(email: string, password: string) {
  if (!email || !password) {
    toast.error('Vă rugăm să completați toate câmpurile!');
    return false;
  }

  return true;
}
