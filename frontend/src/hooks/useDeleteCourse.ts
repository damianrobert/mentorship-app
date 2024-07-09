import toast from 'react-hot-toast';

const useDeleteCourse = () => {
  const deleteCourse = async (id: string) => {
    try {
      const res = await fetch(`/api/course/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await res.json();

      if (data.error) throw new Error(data.error);

      if (res.ok) {
        toast.success('Cursul a fost șters cu succes!');
      } else {
        toast.error('A apărut o eroare la ștergerea cursului!');
      }

      return data;
    } catch (error) {
      console.error('A aparut o eroare la stergerea cursului:', error);
      return false;
    }
  };

  return { deleteCourse };
};

export default useDeleteCourse;
