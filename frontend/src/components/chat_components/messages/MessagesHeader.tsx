const MessagesHeader = ({ toUser }: { toUser: string }) => {
  return (
    <>
      <span className='label-text text-gray-600'>Către:</span>
      <span className='text-gray-900 font-bold'> {toUser}</span>
    </>
  );
};

export default MessagesHeader;
