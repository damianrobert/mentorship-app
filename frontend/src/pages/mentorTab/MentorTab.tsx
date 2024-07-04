import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FaPlus } from 'react-icons/fa';
import CourseUpload from '../../components/courses/CourseUpload';
import { useGetCourseByAuthorId } from '../../hooks/useGetCourseByAuthorId';
import { useAuthContext } from '../../context/AuthContext';
import Course from '../../components/courses/Course';

const MentorTab = () => {
  const [uploadMode, setUploadMode] = useState(false);
  const { authUser }: any = useAuthContext();
  const { loading, coursesByAuthorId } = useGetCourseByAuthorId(authUser._id);

  return (
    <div>
      <Navbar />

      <div
        className='bg-zinc-200 p-2 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <button
          className='btn btn-sm bg-[#5874ff] border-0 hover:bg-[#4665fd] flex items-center text-white p-2'
          onClick={() => setUploadMode(!uploadMode)}
        >
          <p className='mr-2'>Încarcă un curs nou</p> <FaPlus size={14} />
        </button>

        {uploadMode ? <CourseUpload /> : null}

        <div className='m-6 text-black bg-[#4a5fc1] w-ful p-4 rounded-md'>
          <h2 className='text-white'>Cursuri încărcate de tine</h2>
          {loading ? <div className='loading loading-spinner'></div> : null}
          {coursesByAuthorId.map((course: any) => (
            <div className='cursor-pointer' key={course._id}>
              <Course
                title={course.title}
                description={course.description}
                imageUrl={course.imageUrl}
                instructor={course.instructor}
                categories={course.categories}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MentorTab;
