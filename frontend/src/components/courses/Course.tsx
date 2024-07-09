import { useGetUserById } from '../../hooks/useGetUserById';

const Course = ({
  title,
  description,
  imageUrl,
  instructor,
  categories,
}: {
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  categories: string[];
}) => {
  const user = useGetUserById(instructor);

  return (
    <div className='bg-white hover:bg-zinc-100 p-4 rounded-lg shadow-md m-2'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-32 object-cover rounded-t-lg'
      />
      <h3 className='text-xl font-semibold mt-4'>{title}</h3>
      <p className='text-gray-700 mt-2 overflow-hidden h-7'>{description}</p>

      <div className='flex items-center '>
        <p className='text-gray-700 mt-2'>
          Predat de:
          {' ' + user?.firstName + ' ' + user?.lastName}
        </p>
        <div className='w-fit ml-2 pt-3'>
          <img className='w-[20px]' src={user?.avatar} alt='profile pic' />{' '}
        </div>
      </div>

      <p className='text-gray-700 mt-2'>Pentru: {categories + ' '}</p>
    </div>
  );
};

export default Course;
