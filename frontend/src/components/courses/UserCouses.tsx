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

  return (
    <Course
      key={course._id}
      title={course.title}
      description={course.description}
      imageUrl={course.backgroundImage}
      instructor={course.instructor}
      categories={course.categories}
    />
  );
};

export default UserCourses;
