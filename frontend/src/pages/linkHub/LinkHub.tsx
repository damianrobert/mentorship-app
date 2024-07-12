import { useState } from 'react';
import MentorCard from '../../components/linkHub/MentorCard';
import Navbar from '../../components/Navbar';
import useGetUsers from '../../hooks/useGetUsers';
import MentorView from '../../components/linkHub/MentorView';
import { FaArrowLeftLong } from 'react-icons/fa6';

const LinkHub = () => {
  const [selectedMentor, setSelectedMentor] = useState(null);
  const { users }: any = useGetUsers();
  const mentors = users.filter((user: any) => user.roles.mentor);

  return (
    <div>
      <Navbar />

      <div
        className='bg-slate-200 overflow-y-scroll p-2'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <h1 className='text-xl text-center text-gray-500 font-bold pt-4'>
          Locul perfect pentru a găsi un mentor pe măsură!!
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
          {selectedMentor === null
            ? mentors.map((mentor: any) => (
                <div onClick={() => setSelectedMentor(mentor)}>
                  <MentorCard key={mentor._id} mentor={mentor} />
                </div>
              ))
            : null}
        </div>

        {selectedMentor !== null ? (
          <button
            className='btn btn-sm btn-primary text-white my-2 btn-hover-effect'
            onClick={() => setSelectedMentor(null)}
          >
            <div className='arrow-icon'>
              <FaArrowLeftLong />
            </div>
            Înapoi la mentori
          </button>
        ) : null}

        {selectedMentor !== null ? (
          <MentorView mentor={selectedMentor} />
        ) : null}
      </div>
    </div>
  );
};

export default LinkHub;
