import { useAuthContext } from '../../context/AuthContext';
import useFinishCourse from '../../hooks/useFinishCourse';
import { useGetCourseById } from '../../hooks/useGetCourseById';
import Course from './Course';

const UserCourses = ({ enrolledCourses }: any) => {
  return (
    <div>
      {enrolledCourses?.map((enrolledCourse: any) => (
        <CourseDetails
          key={enrolledCourse.courseId}
          courseId={enrolledCourse.courseId}
        />
      ))}
    </div>
  );
};

const CourseDetails = ({ courseId }: any) => {
  const { course } = useGetCourseById(courseId);
  const { finishCourse } = useFinishCourse();
  const { authUser }: any = useAuthContext();

  return (
    <>
      <div className='bg-blue-300 p-1 rounded-md'>
        <Course
          key={course._id}
          title={course.title}
          description={course.description}
          imageUrl={course.backgroundImage}
          instructor={course.instructor}
          categories={course.categories}
        />

        <button
          className='btn btn-sm btn-outline btn-error w-full border-[2px]'
          onClick={() => {
            finishCourse(authUser._id, courseId);
          }}
        >
          Termină cursul
        </button>
      </div>
    </>
  );
};

export default UserCourses;
