import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const authContext = useAuthContext();
  const navigate = useNavigate();

  const signup = async ({
    firstName,
    lastName,
    email,
    password,
    username,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
  }) => {
    const success: boolean = handleInputErrors({
      firstName,
      lastName,
      email,
      password,
      username,
    });

    if (!success) return;

    setLoading(true);

    try {
      const response: Response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          username,
        }),
      });

      const data = await response.json();

      if (data.message === 'User with same email already exists') {
        toast.error('Un utilizator cu această adresă de email există deja!');
        return;
      }

      if (data.message === 'This username is taken, please try another one') {
        toast.error(
          'Acest nume de utilizator este deja folosit, vă rugăm să încercați altul.'
        );
        return;
      }

      if (data.error) throw new Error(data.error);

      localStorage.setItem('auth-user-info', JSON.stringify(data));

      if (authContext && authContext.setAuthUser) {
        authContext.setAuthUser(data);
      }

      if (success) toast.success('Contul a fost creat cu succes!');
      navigate('/login');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

const handleInputErrors = ({
  firstName,
  lastName,
  email,
  password,
  username,
}: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
}) => {
  if (!firstName || !lastName || !email || !password || !username) {
    toast.error('Vă rugăm să completați toate câmpurile');
    return false;
  }

  if (password.length < 8) {
    toast.error('Parola trebuie să aibă cel puțin 8 caractere');
    return false;
  }

  if (username.length < 5) {
    toast.error('Numele de utilizator trebuie să aibă cel puțin 5 caractere');
    return false;
  }

  return true;
};
