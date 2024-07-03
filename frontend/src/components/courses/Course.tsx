// Course.jsx

const Course = ({
  title,
  description,
  imageUrl,
  instructor,
  categories,
}: {
  title: string;
  description: string;
  imageUrl: string;
  instructor: string;
  categories: string[];
}) => {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <img
        src={imageUrl}
        alt={title}
        className='w-full h-32 object-cover rounded-t-lg'
      />
      <h3 className='text-xl font-semibold mt-4'>{title}</h3>
      <p className='text-gray-700 mt-2'>{description}</p>
      <p className='text-gray-700 mt-2'>Predat de: {instructor}</p>
      <p className='text-gray-700 mt-2'>Pentru: {categories + ' '}</p>
    </div>
  );
};

export default Course;
