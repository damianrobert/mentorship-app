import Navbar from '../../components/Navbar';
import Course from '../../components/courses/Course';

const Courses = () => {
  const coursesData = [
    {
      title: 'Course 1',
      description: 'Description for course 1',
      imageUrl: `https://picsum.photos/id/${1}/400/300`,
      instructor: 'Instructor 1',
      categories: ['Programare', 'Științe'],
    },
    {
      title: 'Course 2',
      description: 'Description for course 2',
      imageUrl: `https://picsum.photos/id/${4}/400/300`,
      instructor: 'Instructor 2',
      categories: ['Programare', 'Științe'],
    },
    {
      title: 'Course 3',
      description: 'Description for course 3',
      imageUrl: `https://picsum.photos/id/${5}/400/300`,
      instructor: 'Instructor 3',
      categories: ['Programare', 'Științe'],
    },
  ];
  return (
    <div>
      <Navbar />

      <div className='bg-slate-200' style={{ height: 'calc(100vh - 50px)' }}>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Cursuri disponibile
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {coursesData.map((course, index) => (
            <Course
              key={index}
              title={course.title}
              description={course.description}
              imageUrl={course.imageUrl}
              instructor={course.instructor}
              categories={course.categories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
