import { useState } from 'react';
import toast from 'react-hot-toast';

const usePutEnrollCourse = () => {
  const [loading, setLoading] = useState(false);

  const putEnrollCourse = async (
    id: string,
    courseId: string,
    status: boolean
  ) => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/users/enroll/${id}/${courseId}/${status}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        toast.success('V-ați înscris cu succes la acest curs!');
      } else if (data.message === 'User already enrolled in this course') {
        toast.error('Sunteți deja înscris la acest curs!');
      } else {
        toast.error('An error occurred while enrolling in this course');
      }
    } catch (error) {
      toast.error('An error occurred while enrolling in this course');
    } finally {
      setLoading(false);
    }
  };

  return { loading, putEnrollCourse };
};

export default usePutEnrollCourse;
