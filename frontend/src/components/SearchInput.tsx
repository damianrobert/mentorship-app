import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useConversation from '../zustand/useConversation';
import useGetConversations from '../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [search, setSearch] = useState<string>('');
  const { setSelectedConversation }: any = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error('Cautarea trebuie sa contina cel putin 3 caractere');

    const conversation: any = conversations.find(
      (c: any) =>
        c.firstName.toLowerCase().includes(search.toLowerCase()) ||
        c.lastName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('Conversatia nu a fost gasita');
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
