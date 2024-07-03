import Comment from '../forum/Comment';

const PostView = ({ post }: any) => {
  return (
    <div className='w-full h-full flex flex-col '>
      <div className='w-fit mx-auto text-2xl text-white mt-4 mb-6'>
        {post.title}
      </div>
      <div className='w-full h-full px-2 my-4 text-justify text-gray-900 text-[17px] overflow-y-scroll'>
        {post.content}
        <div className='divider'></div>
        <h2 className='text-white font-semibold text-xl mb-8'>Comentarii</h2>
        <div>
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>

      <div className='w-fit mx-auto'>
        <input
          className='input w-[25rem]'
          type='text'
          placeholder='Lăsați un comentariu'
        />
      </div>
    </div>
  );
};

export default PostView;
