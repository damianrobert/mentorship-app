import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useGetUserById } from '../../hooks/useGetUserById';
import usePutEnrollCourse from '../../hooks/usePutEnrollCourse';
import toast from 'react-hot-toast';
import useDeleteCourse from '../../hooks/useDeleteCourse';

const CourseView = ({ course }: any) => {
  const [alreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const { authUser }: any = useAuthContext();
  const { deleteCourse }: any = useDeleteCourse();
  const user = useGetUserById(course.instructor);
  const { putEnrollCourse }: any = usePutEnrollCourse();

  const myCourse = authUser._id === course.instructor;

  if (user?.enrolledCourses) {
    const userCourses = user.enrolledCourses as object[];
    const enrolledCoursesIds = userCourses.map(
      (course: any) => course.courseId
    );
    if (enrolledCoursesIds.includes(course._id)) {
      setAlreadyEnrolled(true);
    }
  }

  const handleEnroll = () => {
    if (alreadyEnrolled) {
      toast.error('Sunteți deja înscris la acest curs!');
      return;
    } else if (myCourse) {
      toast.error('Nu puteți să vă înscrieți la propriul curs!');
      return;
    } else {
      putEnrollCourse(authUser._id, course._id, true);
    }
  };

  return (
    <div className='w-full flex bg-slate-300 rounded-md h-auto flex-col p-6'>
      <h1 className='text-black text-xl text-center font-semibold'>
        Titlul cursului: {' ' + course.title}
      </h1>

      <div className='w-full mt-6 text-black flex flex-col bg-sky-100 p-2 rounded-md'>
        <span className='mb-6'>Descriere:</span>
        <p className='text-justify'>{course.description}</p>

        <div className='my-4'>
          Cursul este predat de{' '}
          <span className='font-bold'>
            {' ' + user.firstName + ' ' + user.lastName}
          </span>
        </div>

        <div>
          Cursul pune la dispovizie următoarele materiale:{' '}
          <span className='text-gray-700'>{' ' + course.offeredResources}</span>
        </div>
      </div>

      <div>
        Dificultate curs:{' '}
        <span className='text-gray-700'>{' ' + course.difficulty}</span>
      </div>

      <video width='400' height='200' controls>
        <source src={course.video} />
        Your browser does not support the video tag.
      </video>

      {alreadyEnrolled ? (
        <div className='bg-slate-700 rounded-md p-2 mt-6 '>
          <p className='w-fit mx-auto text-white'>
            Sunteți deja înscris la acest curs!
          </p>
        </div>
      ) : (
        <button
          className='btn btn-success btn-outline w-full mt-8 text-[16px]'
          onClick={() => handleEnroll()}
        >
          {alreadyEnrolled
            ? 'Esti deja înscris la acest curs'
            : 'Înscrie-te acum'}
        </button>
      )}

      {authUser.isAdmin ? (
        <div className='mt-6'>
          <h1 className='text-black font-bold'>
            Ca și admin puteți sterge acest curs
          </h1>
          <button
            className='btn btn-sm btn-outline btn-error'
            onClick={() =>
              (
                document.getElementById(
                  'delete_course_modal'
                ) as HTMLDialogElement
              )?.showModal()
            }
          >
            Șterge cursul
          </button>
        </div>
      ) : null}

      <dialog id='delete_course_modal' className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg text-red-500'>Atenție!</h3>
          <p className='py-4'>
            Ești sigur că vrei să ștergi cursul{' '}
            <span className='font-bold'>{course.title}</span>?
          </p>
          <div className='modal-action'>
            <form method='dialog'>
              <button
                className='btn btn-sm btn-outline btn-error'
                onClick={() => deleteCourse(course._id)}
              >
                Șterge cursul
              </button>
              <button className='btn btn-sm'>Anulează</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CourseView;
