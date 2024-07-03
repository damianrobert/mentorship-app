import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const useGetArticles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  try {
    useEffect(() => {
      const getArticles = async () => {
        setLoading(true);

        try {
          const res = await fetch('/api/posts/getArticles');
          const data = await res.json();

          if (data.error) throw new Error(data.error);
          setArticles(data);
        } catch (error: any) {
          toast.error(error.message);
        } finally {
          setLoading(false);
        }
      };
      getArticles();
    }, []);

    return { loading, articles };
  } catch (error) {}
};

export default useGetArticles;
