import toast from 'react-hot-toast';

const useDeleteUser = () => {
  const deleteUser = async (userId: string) => {
    try {
      const res = await fetch(`/api/users/delete/${userId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      if (res.ok) {
        toast.success('Utilizatorul a fost șters cu succes!');
      } else {
        toast.error('A apărut o eroare la ștergerea utilizatorului!');
      }

      return data;
    } catch (error) {
      console.error(error);
    }
  };

  return { deleteUser };
};

export default useDeleteUser;
