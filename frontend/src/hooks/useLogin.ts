import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userDetails, setUserDetails] = useState({});
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
      setUserDetails(data);
      if (data.error) throw new Error(data.error);

      localStorage.setItem('auth-user-info', JSON.stringify(data));
      authContext!.setAuthUser(data);

      toast.success(`Login successful as ${data.username}`);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors(email: string, password: string) {
  if (!email || !password) {
    toast.error('Please fill in all fields');
    return false;
  }

  return true;
}
