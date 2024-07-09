import { useState } from 'react';
import toast from 'react-hot-toast';

const usePutAsignMentor = () => {
  const [loading, setLoading] = useState(false);

  const putAsignMentor = async (mentorId: string, menteeId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/users/asign/${mentorId}/${menteeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.ok) {
        toast.success('Asignat mentor cu succes!');
      } else {
        toast.error('A apărut o eroare la asignarea mentorului!');
      }
    } catch (error) {
      toast.error('A apărut o eroare la asignarea mentorului!');
    } finally {
      setLoading(false);
    }
  };

  return { loading, putAsignMentor };
};

export default usePutAsignMentor;
