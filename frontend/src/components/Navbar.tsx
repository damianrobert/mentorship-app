import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  const navigate = useNavigate();

  const navigateTo =
    (path: string) => (event: React.MouseEvent<HTMLLIElement>) => {
      navigate(path);
    };

  return (
    <nav className='border-b-[.125rem] bg-slate-50 border-stone-400 py-2 px-4'>
      <div className='flex justify-between items-center'>
        <div className='flex'>
          <span className='mr-4'>Logo</span>

          <ol className='flex'>
            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/chat')}
            >
              Chat
            </li>

            <li className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'>
              Profil
            </li>

            <li className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'>
              Forum
            </li>

            <li className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'>
              Panou control
            </li>

            <li className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'>
              LinkHub
            </li>

            {/* admin dropdown button for administrative functionalities*/}
          </ol>
        </div>

        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
