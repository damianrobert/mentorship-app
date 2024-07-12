import UserCourses from '../../components/courses/UserCouses';
import Navbar from '../../components/Navbar';
import { useAuthContext } from '../../context/AuthContext';
import { useGetUserById } from '../../hooks/useGetUserById';

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

  const user = useGetUserById(authUser._id);
  const userCourses = user.enrolledCourses as object[];
  const userPosts = user.posts as object[];

  const numberOfCourses = userCourses?.length;
  const numberOfFinishedCourses = user?.finishedCourses;
  const numberOfPosts = userPosts?.length;

  return (
    <div>
      <Navbar />

      <div
        className='flex items-center justify-center bg-slate-200 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <div className='h-5/6 w-2/3 flex justify-around p-2 rounded-md '>
          <div className='bg-[#78bbff] rounded-md w-2/5 mr-2 p-1'>
            <div className='flex items-center'>
              <div className='w-12 rounded-full m-2'>
                <img src={authUser.avatar} alt='' />
              </div>

              <div className='text-white'>
                <span className='mx-1 uppercase'>{authUser.firstName}</span>
                <span className='mx-1 uppercase'>{authUser.lastName}</span>
              </div>
            </div>

            <div>
              {isAdmin ? (
                <span className='text-red-500 text-bold my-4'>
                  Acest utilizator este administrator!
                </span>
              ) : null}
            </div>

            <div className='my-4'>
              <div className='text-gray-700'>
                Email:
                <span className='text-black'>{' ' + authUser.email}</span>
              </div>

              <div className='text-gray-700 my-4'>
                Rolurile utilizatorului:
                <span className='text-black'>
                  {isMentee ? ' Discipol ' : null}{' '}
                  {isMentor ? ' & Mentor' : null}
                </span>
              </div>
            </div>

            <div className='text-gray-700 my-4'>
              Utilizator înregistrat de la:
              <span className='text-black'>
                {' ' + formatDate(authUser.createdAt)}
              </span>
            </div>
          </div>

          <div className='bg-[#87bff8] rounded-md w-3/5 flex p-2'>
            <div className='flex flex-col p-1 w-full bg-slate-200 rounded-md overflow-y-scroll'>
              <h3 className='text-black text-center '>Cursuri înrolate</h3>

              <UserCourses enrolledCourses={userCourses} />
            </div>
          </div>
        </div>

        <div className='p-2 bg-[#edffed] mt-2 rounded-md'>
          <h2 className='text-2xl font-bold mb-6'>Informații utilizator</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Înregistrat din</h3>
              <p className='text-gray-700'>
                {' ' + formatDate(authUser.createdAt)}
              </p>
            </div>
            <div className='bg-green-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Cursuri înrolate</h3>
              <p className='text-gray-700'>{numberOfCourses}</p>
            </div>
            <div className='bg-yellow-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Cursuri terminate</h3>
              <p className='text-gray-700'>{numberOfFinishedCourses}</p>
            </div>
            <div className='bg-purple-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Postări</h3>
              <p className='text-gray-700'>
                {numberOfPosts === undefined ? '0' : numberOfPosts}
              </p>
            </div>
            <div className='bg-red-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>
                Timp petrecut înrolat în cursuri
              </h3>
              <p className='text-gray-700'>0 ore</p>
            </div>
            <div className='bg-indigo-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Număr discipoli</h3>
              <p className='text-gray-700'>0</p>
            </div>

            <div className='bg-pink-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Insigne</h3>
              <p className='text-gray-700'>0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
