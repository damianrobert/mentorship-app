import { useState } from 'react';
import Navbar from '../../components/Navbar';
import { FaPlus } from 'react-icons/fa';
import CourseUpload from '../../components/courses/CourseUpload';

const MentorTab = () => {
  const [uploadMode, setUploadMode] = useState(false);

  return (
    <div>
      <Navbar />

      <div
        className='bg-slate-200 p-2 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <button
          className='btn btn-sm flex items-center text-white p-2'
          onClick={() => setUploadMode(!uploadMode)}
        >
          <p className='mr-2'>Încarcă un curs nou</p> <FaPlus size={14} />
        </button>

        {uploadMode ? <CourseUpload /> : null}
      </div>
    </div>
  );
};

export default MentorTab;
