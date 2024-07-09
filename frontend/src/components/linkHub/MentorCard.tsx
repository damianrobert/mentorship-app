const MentorCard = ({ mentor }: any) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-6 mb-4 border-b-4 hover:border-blue-400  cursor-pointer'>
      <img
        src={mentor.avatar || 'default-avatar.png'}
        alt={`${mentor.firstName} ${mentor.lastName}`}
        className='w-24 h-24 rounded-full mx-auto'
      />
      <h2 className='text-xl font-bold text-center mt-4'>
        {mentor.firstName} {mentor.lastName}
      </h2>
      <p className='text-center text-gray-600'>@{mentor.username}</p>
      <p className='text-center text-gray-600'>{mentor.email}</p>
    </div>
  );
};

export default MentorCard;
