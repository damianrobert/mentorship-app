import { useEffect, useState } from 'react';

export const useGetCourseById = (courseId: string) => {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState<any>({});

  useEffect(() => {
    const getCourseById = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/course/get/${courseId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setCourse(data);

        return data;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCourseById();
  }, []);

  return { loading, course };
};
