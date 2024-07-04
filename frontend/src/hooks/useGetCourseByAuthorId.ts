import { useEffect, useState } from 'react';

export const useGetCourseByAuthorId = (authorId: string) => {
  const [loading, setLoading] = useState(false);
  const [coursesByAuthorId, setCoursesByAuthorId] = useState<any[]>([]);

  useEffect(() => {
    const getCoursesByAuthorId = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/course/getByAuthorId/${authorId}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setCoursesByAuthorId(data);

        return data;
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getCoursesByAuthorId();
  }, []);

  return { loading, coursesByAuthorId };
};
