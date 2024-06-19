import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  return (
    <form>
      <div className='flex'>
        <input
          type='text'
          placeholder='Caută...'
          className='input input-sm input-bordered rounded-full w-full bg-white text-black'
        />

        <button
          className='btn btn-sm btn-circle bg-sky-500 text-white mx-1 border-0'
          type='submit'
        >
          <FaSearch size={16} />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
