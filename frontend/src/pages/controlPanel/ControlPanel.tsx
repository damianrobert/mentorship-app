import { ReactInstance, useRef, useState } from 'react';
import Navbar from '../../components/Navbar';
import UserBlock from '../../components/controlPanel/UserBlock';
import useGetUsers from '../../hooks/useGetUsers';
import CoursePrint from '../../components/courses/CoursePrint';
import { useReactToPrint } from 'react-to-print';

const ControlPanel = () => {
  const { loading, users } = useGetUsers();
  const [showUsers, setShowUsers] = useState<boolean>(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const componentRef = useRef(null);

  const userCourses = selectedUser?.enrolledCourses as object[];
  const userPosts = selectedUser?.posts as object[];

  const numberOfCourses = userCourses?.length;
  const numberOfFinishedCourses = selectedUser?.finishedCourses;
  const numberOfPosts = userPosts?.length;

  const formatDate = (dateString: string): string => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ro-RO', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };

  const handleSelectedUser = (user: any) => {
    setSelectedUser(user);
    console.log(user);
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='bg-white h-screen'>
      <Navbar />

      <div
        className='p-6 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <button
          className='btn bg-slate-400 btn-sm text-white m-6'
          onClick={() => {
            setShowUsers(!showUsers);
          }}
        >
          Afișează utilizatori
          {loading === true ? (
            <div className='loading loading-spinner'></div>
          ) : null}
        </button>
        <div className='p-2 bg-[#e6f7ff] w-full rounded-md max-h-96 overflow-y-scroll'>
          <div className='text-black mb-2'>Lista utilizatori</div>
          {showUsers
            ? users.map((user: any) => (
                <>
                  <div
                    key={user._id}
                    className='cursor-pointer'
                    onClick={() => handleSelectedUser(user)}
                  >
                    <UserBlock
                      key={user._id}
                      id={user._id}
                      firstName={user.firstName}
                      lastName={user.lastName}
                      email={user.email}
                      password={user.password}
                      username={user.username}
                      roles={user.roles}
                      isAdmin={user.isAdmin}
                      selected={selectedUser?._id === user._id}
                      selectedUser={selectedUser}
                    />
                  </div>
                  <div className='divider'></div>
                </>
              ))
            : null}
        </div>

        <div className='p-2 bg-[#fbe7ff] mt-2 rounded-md'>
          <h2 className='text-2xl font-bold mb-6'>Informații utilizatori</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='bg-blue-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Înregistrat din</h3>
              <p className='text-gray-700'>
                {formatDate(selectedUser?.createdAt)}
              </p>
            </div>
            <div className='bg-green-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Cursuri înrolate</h3>
              <p className='text-gray-700'>{numberOfCourses}</p>
            </div>
            <div className='bg-yellow-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Cursuri terminate</h3>
              <p className='text-gray-700'>
                {numberOfFinishedCourses === undefined
                  ? '0'
                  : numberOfFinishedCourses}
              </p>
            </div>
            <div className='bg-purple-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>Postări</h3>
              <p className='text-gray-700'>{numberOfPosts}</p>
            </div>
            <div className='bg-red-100 p-4 rounded-lg shadow-lg border-b-2 border-[#ffffff]'>
              <h3 className='text-lg font-semibold'>
                Timp petrecut înrolat în cursuri
              </h3>
              <p className='text-gray-700'>0</p>
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

        <div className='mt-10'>
          <h1 className='text-black font-bold'>Evidența cursurilor</h1>
          <button
            className='btn btn-sm btn-primary btn-outline'
            onClick={handlePrint}
          >
            Printeaza cursurile
          </button>
          <div ref={componentRef}>
            <CoursePrint />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
