import { useGetUserById } from '../../hooks/useGetUserById';

const PostCard = ({
  title,
  createdAt,
  genre,
  authorId,
}: {
  title: string;
  createdAt: string;
  genre: string[];
  authorId: string;
}) => {
  const formattedGenres = genre.join(', ');
  const user = useGetUserById(authorId);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  return (
    <div className='bg-slate-400 rounded-md flex flex-col p-2 mb-2 cursor-pointer hover:bg-slate-600'>
      <div className='text-black w-full flex justify-center'>
        <p className='text-zinc-200 font-bold mr-4'>Titlul postării: </p>
        {title}
      </div>

      <div className='text-black flex'>
        <p className='mr-2'>Autor:</p>{' '}
        <p className='text-gray-600'>{user.firstName + ' ' + user.lastName}</p>
      </div>

      <div className='text-black'>Creat: {formatDate(createdAt)}</div>
      <div className='text-black flex'>
        <p className='mr-2'>Genre:</p>{' '}
        <p className='font-bold'>{formattedGenres}</p>
      </div>
      <p className='text-black'>
        Roles: {user.roles?.mentee ? 'Discipol' : null}
        {user.roles?.mentor ? ', Mentor' : null}
      </p>
    </div>
  );
};

export default PostCard;
