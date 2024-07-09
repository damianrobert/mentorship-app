import useGetCourses from '../../hooks/useGetCourses';
import Course from './Course';

const CoursePrint = () => {
  const { courses }: any = useGetCourses();
  return (
    <div className='print-container'>
      <h1 className='print-title'>Evidența cursurilor</h1>
      {courses?.map((course: any) => {
        return (
          <div key={course?._id} className='print-course'>
            <Course
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              instructor={course.instructor}
              categories={course.categories}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CoursePrint;
