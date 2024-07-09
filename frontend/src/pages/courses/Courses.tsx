import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Course from '../../components/courses/Course';
import CourseView from '../../components/courses/CourseView';
import useGetCourses from '../../hooks/useGetCourses';

const Courses = () => {
  const { loading, courses }: any = useGetCourses();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [viewMode, setViewMode] = useState(false);

  const handleCourseSelect = (course: any) => {
    setSelectedCourse(course);
    setViewMode(true);
  };
  return (
    <div>
      <Navbar />

      <div
        className='bg-slate-200 py-2 px-4 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        {viewMode ? null : (
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Cursuri disponibile
          </h2>
        )}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {viewMode ? null : loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            courses.map((course: any) => (
              <div
                className='cursor-pointer'
                key={course._id}
                onClick={() => {
                  handleCourseSelect(course);
                }}
              >
                <Course
                  title={course.title}
                  description={course.description}
                  imageUrl={course.imageUrl}
                  instructor={course.instructor}
                  categories={course.categories}
                />
              </div>
            ))
          )}
        </div>
        {viewMode ? (
          <button
            className='btn btn-sm btn-outline btn-error m-2'
            onClick={() => setViewMode(false)}
          >
            Închide curs
          </button>
        ) : null}
        {viewMode ? <CourseView course={selectedCourse} /> : null}
      </div>
    </div>
  );
};

export default Courses;
