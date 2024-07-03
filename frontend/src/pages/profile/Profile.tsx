import Navbar from '../../components/Navbar';
import { useAuthContext } from '../../context/AuthContext';

const Profile = () => {
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const { authUser }: any = useAuthContext();
  const isAdmin: boolean = authUser.isAdmin;
  const isMentee: boolean = authUser.roles.mentee;
  const isMentor: boolean = authUser.roles.mentor;

  return (
    <div className='bg-stone-200 h-screen'>
      <Navbar />

      <div
        className='flex items-center justify-center'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <div className='h-5/6 w-2/3 flex justify-around p-2 bg-stone-300 rounded-md '>
          <div className='bg-gray-400 rounded-md w-2/5 mr-2 p-1'>
            <div className='flex items-center'>
              <div className='w-12 rounded-full m-2'>
                <img src={authUser.avatar} alt='' />
              </div>

              <div className='text-black'>
                <span className='mx-1 uppercase'>{authUser.firstName}</span>
                <span className='mx-1 uppercase'>{authUser.lastName}</span>
              </div>
            </div>

            <div>
              {isAdmin ? (
                <span className='text-red-500 text-bold'>
                  Acest utilizator este administrator!
                </span>
              ) : null}
            </div>

            <div className=''>
              <div className='text-gray-700'>
                Email:
                <span className='text-black'>{' ' + authUser.email}</span>
              </div>

              <div className='text-gray-700'>
                Rolurile utilizatorului:
                <span className='text-black'>
                  {isMentee ? ' Discipol ' : null}{' '}
                  {isMentor ? ' & Mentor' : null}
                </span>
              </div>
            </div>

            <div className='text-gray-700 '>
              Utilizator înregistrat de la:
              <span className='text-black'>
                {' ' + formatDate(authUser.createdAt)}
              </span>
            </div>
          </div>
          <div className='bg-gray-500 rounded-md w-3/5'>realizări: </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
