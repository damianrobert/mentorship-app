import { useState } from 'react';

export const useGetUserById = (id: string) => {
  const [user, setUser] = useState<any>({});

  const getUser = async () => {
    const res = await fetch(`/api/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setUser(data);
    return data;
  };

  getUser();

  return user;
};
