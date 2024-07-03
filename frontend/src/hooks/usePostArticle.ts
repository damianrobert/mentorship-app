import { useState } from 'react';
import toast from 'react-hot-toast';

const usePostArticle = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const postArticle = async (post: object) => {
    setLoading(true);

    try {
      const res = await fetch('/api/posts/postArticle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ post }),
      });

      const data = await res.json();
      if (data.error) throw new Error(data.error);

      toast.success('Postarea a fost adăugată cu succes!');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, postArticle };
};

export default usePostArticle;
