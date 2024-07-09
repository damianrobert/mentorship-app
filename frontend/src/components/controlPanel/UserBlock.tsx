import { IoMdClose } from 'react-icons/io';
import useDeleteUser from '../../hooks/useDeleteUser';

const UserBlock = ({
  id,
  firstName,
  lastName,
  email,
  password,
  username,
  roles,
  isAdmin,
  selected,
  selectedUser,
}: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  roles: any;
  isAdmin: boolean;
  selected?: boolean;
  selectedUser?: any;
}) => {
  const { deleteUser } = useDeleteUser();

  return (
    <div className='flex '>
      <div
        className={`bg-[#beecff] p-2 rounded-md mb-4 flex overflow-x-scroll mr-2 ${
          selected ? 'border-[3px] border-sky-600 shadow-md' : ''
        }`}
      >
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

      <div
        className='py-4 bg-red-500 h-full rounded-md cursor-pointer'
        onClick={() =>
          (
            document.getElementById('delete_user_modal') as HTMLDialogElement
          )?.showModal()
        }
      >
        <IoMdClose size={24} color='white' />
      </div>

      <dialog id='delete_user_modal' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Atenție!</h3>
          <p className='py-4'>
            Sunteți sigur că doriți să ștergeți utilizatorul selectat?
            <p className='block font-bold mt-2'>
              Utilizatorul: {selectedUser?._id + ' '}{' '}
              {selectedUser?.firstName + ' '} {selectedUser?.lastName + ' '}{' '}
              {selectedUser?.email + ' '}
            </p>
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              <button
                className='btn btn-sm btn-error btn-outline'
                onClick={() => deleteUser(selectedUser._id)}
              >
                {' '}
                Șterge utilizatorul
              </button>
              <button className='btn btn-sm' btn-outline>
                Anulează
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default UserBlock;
