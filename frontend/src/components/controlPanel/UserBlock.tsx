import { HiDotsHorizontal } from 'react-icons/hi';

const UserBlock = ({
  id,
  firstName,
  lastName,
  email,
  password,
  username,
  roles,
  isAdmin,
}: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  roles: any;
  isAdmin: boolean;
}) => {
  return (
    <div className='flex '>
      <div className='bg-[#beecff] p-2 rounded-md mb-4 flex overflow-x-scroll mr-2'>
        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>ID:</span>
          <span className='text-black'>{id}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Nume:</span>
          <span className='text-black'>{firstName}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Prenume:</span>
          <span className='text-black'>{lastName}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Email:</span>
          <span className='text-black'>{email}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Password:</span>
          <span className='text-black'>{password}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Username:</span>
          <span className='text-black'>{username}</span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px] text-gray-600'>Roluri:</span>
          <span className='text-black'>
            {roles.mentee == true ? 'Discipol' : null}
            {roles.mentor == true ? ', Mentor' : null}
          </span>
        </div>

        <div className='w-fit mr-4 bg-[#ffffff] p-1 rounded-md flex'>
          <span className='mr-[3px]'>Admin?:</span>
          <span className='text-black'>
            {isAdmin === true ? 'true' : 'false'}
          </span>
        </div>
      </div>

      <div className='py-4 bg-white h-full rounded-md cursor-pointer'>
        <HiDotsHorizontal size={24} />
      </div>
    </div>
  );
};

export default UserBlock;
