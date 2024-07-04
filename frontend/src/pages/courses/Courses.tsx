import Navbar from '../../components/Navbar';
import Course from '../../components/courses/Course';
import useGetCourses from '../../hooks/useGetCourses';

const Courses = () => {
  const { loading, courses }: any = useGetCourses();
  return (
    <div>
      <Navbar />

      <div
        className='bg-slate-200 py-2 px-4 overflow-y-scroll'
        style={{ height: 'calc(100vh - 50px)' }}
      >
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Cursuri disponibile
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            courses.map((course: any) => (
              <div className='cursor-pointer' key={course._id}>
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
      </div>
    </div>
  );
};

export default Courses;
