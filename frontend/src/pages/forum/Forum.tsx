import Navbar from '../../components/Navbar';
import { MdOutlineCreate } from 'react-icons/md';
import { TbPencilCancel } from 'react-icons/tb';
import PostCard from '../../components/forum/PostCard';
import PostView from '../../components/forum/PostView';
import { useState } from 'react';
import WriteMode from '../../components/forum/WriteMode';
import useGetArticles from '../../hooks/useGetArticles';

const Forum = () => {
  const [writeMode, setWriteMode] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const { loading, articles }: any = useGetArticles();

  const handlePostSelect = (post: any) => {
    setSelectedPost(post);
  };

  return (
    <div className='bg-stone-200 h-screen'>
      <Navbar />

      <div className='flex p-1' style={{ height: 'calc(100vh - 50px)' }}>
        <div
          className='bg-gray-400 w-2/6 rounded-md mr-1 p-2'
          style={{ height: 'calc(100vh - 60px)' }}
        >
          <button
            className='btn w-full hover:font-bold text-base '
            onClick={() => setWriteMode(!writeMode)}
          >
            {writeMode === false ? (
              <div className='flex items-center'>
                <p className='mr-2'>Scrie o postare</p>{' '}
                <p>
                  <MdOutlineCreate size={18} />
                </p>
              </div>
            ) : (
              <div className='flex items-center'>
                <p className='mr-2'>Anulează scrierea</p>{' '}
                <p>
                  <TbPencilCancel size={18} />
                </p>
              </div>
            )}
          </button>

          <div
            className='bg-slate-500 rounded-md mt-2 p-2 overflow-y-scroll'
            style={{ height: 'calc(100vh - 130px)' }}
          >
            {loading ? (
              <div className='loading loading-spinner w-fit h-fit mx-auto my-auto'></div>
            ) : (
              articles.map((article: any) => (
                <div
                  key={article._id}
                  onClick={() => handlePostSelect(article)}
                >
                  <PostCard
                    title={article.title}
                    firstName={article.firstName}
                    lastName={article.lastName}
                    createdAt={article.createdAt}
                    genre={article.genre}
                    authorId={article.author}
                  />
                </div>
              ))
            )}
          </div>
        </div>

        <div
          className='bg-gray-500 w-4/6 rounded-md h-screen p-1'
          style={{ height: 'calc(100vh - 60px)' }}
        >
          {writeMode === false ? (
            selectedPost ? (
              <PostView post={selectedPost} />
            ) : (
              <div className='w-fit mx-auto mt-[20rem] text-2xl text-white'>
                Selectează o postare
              </div>
            )
          ) : (
            <WriteMode />
          )}
        </div>
      </div>
    </div>
  );
};

export default Forum;
