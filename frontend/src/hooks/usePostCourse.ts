import { useState } from 'react';
import toast from 'react-hot-toast';

export const usePostCourses = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const postCourse = async (course: object) => {
    setLoading(true);

    try {
      const res = await fetch('/api/course/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ course }),
      });

      const data = await res.json();

      if (data.error) throw new Error(data.error);

      toast.success('Cursul a fost adăugat cu succes!');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, postCourse };
};
