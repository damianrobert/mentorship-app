import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchInput = () => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <input
          type='text'
          placeholder='Caută...'
          className='input input-sm input-bordered rounded-full w-full bg-white text-black'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
