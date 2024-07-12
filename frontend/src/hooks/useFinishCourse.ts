import toast from 'react-hot-toast';

const useFinishCourse = () => {
  const finishCourse = async (id: string, courseId: string) => {
    try {
      const response = await fetch(
        `/api/users/finishCourse/${id}/${courseId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      if (response.ok) {
        toast.success('Curs finalizat cu succes!');
      } else {
        toast.error('A apărut o eroare la finalizarea cursului!');
      }
    } catch (error) {
      toast.error('A apărut o eroare la finalizarea cursului!');
    }
  };

  return { finishCourse };
};

export default useFinishCourse;
