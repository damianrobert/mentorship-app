import { useAuthContext } from '../../context/AuthContext';
import usePutAsignMentor from '../../hooks/usePutAsignMentor';

const MentorView = ({ mentor }: any) => {
  const { putAsignMentor }: any = usePutAsignMentor();
  const { authUser }: any = useAuthContext();

  const handleAsignMentor = () => {
    putAsignMentor(mentor._id, authUser._id);
  };
  return (
    <div className='bg-white p-6 rounded shadow-md text-slate-500'>
      <div className='flex items-center space-x-4'>
        <img
          src={mentor.avatar}
          alt={mentor.username}
          className='w-20 h-20 rounded-full'
        />
        <div>
          <h2 className='text-2xl font-bold'>
            {mentor.firstName} {mentor.lastName}
          </h2>
          <p className='text-gray-600'>@{mentor.username}</p>
          <p className='text-gray-600'>{mentor.email}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-semibold'>Roluri:</h3>
        <ul className='list-disc list-inside'>
          {mentor.roles.mentor && <li>Mentor</li>}
          {mentor.roles.mentee && <li>Discipol</li>}
          {mentor.isAdmin && <li>Admin</li>}
        </ul>
      </div>
      <div className='mt-4'>
        <h3 className='text-xl font-semibold'>Coursuri Înrolate:</h3>
        <ul className='list-disc list-inside'>
          {mentor.enrolledCourses.map((course: any, index: any) => (
            <li key={index}>
              {course.courseId} - {course.done ? 'Terminat' : 'În progres...'}
            </li>
          ))}
        </ul>
      </div>

      <div className='mt-4'>
        <h3 className='text-xl font-semibold'>Discipoli:</h3>
        <ul className='list-disc list-inside'>
          {mentor.mentees.map((mentee: any, index: any) => (
            <li key={index}>{mentee}</li>
          ))}
        </ul>
      </div>

      <div className='mt-4'>
        <h3 className='text-xl font-semibold'>Asignează ca mentor:</h3>
        <button
          className='btn btn-sm btn-primary btn-outline mt-2'
          onClick={handleAsignMentor}
        >
          Asigneză ca mentor
        </button>
      </div>
    </div>
  );
};

export default MentorView;
