import { useEffect, useState } from 'react';

const useGetCourses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);

      try {
        const res = await fetch('/api/course/get');
        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setCourses(data);
      } catch (error: any) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getCourses();
  }, []);

  return { loading, courses };
};

export default useGetCourses;
