import { useState } from 'react';

const PostCard = ({
  title,
  firstName,
  lastName,
  createdAt,
  genre,
  authorId,
}: {
  title: string;
  firstName: string;
  lastName: string;
  createdAt: string;
  genre: string[];
  authorId: string;
}) => {
  const formattedGenres = genre.join(', ');
  const idd = authorId;

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const [users, setUsers] = useState<any[]>([]);

  const getUsers = async () => {
    const res = await fetch(`/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    Array.from(users).map((user) => {
      if (user._id === idd) {
        console.log(user.roles);
      }
    });

    const data = await res.json();
    setUsers(data);
    return data;
  };

  //getUsers to display roles
  getUsers();

  return (
    <div className='bg-slate-400 rounded-md flex flex-col p-2 mb-2 cursor-pointer hover:bg-slate-600'>
      <div className='text-black w-full flex justify-center'>
        <p className='text-zinc-200 font-bold mr-4'>Titlul postării: </p>
        {title}
      </div>

      <div className='text-black flex'>
        <p className='mr-2'>Autor:</p>{' '}
        <p className='text-gray-600'>{firstName + ' ' + lastName}</p>
      </div>

      <div className='text-black'>Creat: {formatDate(createdAt)}</div>
      {idd}
      <div className='text-black flex'>
        <p className='mr-2'>Genre:</p>{' '}
        <p className='font-bold'>{formattedGenres}</p>
      </div>
      <p className='text-black'>Roles: </p>
    </div>
  );
};

export default PostCard;
