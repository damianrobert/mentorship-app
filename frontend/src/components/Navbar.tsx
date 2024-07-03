import { useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import { useAuthContext } from '../context/AuthContext';
import { FcMindMap } from 'react-icons/fc';

const Navbar = () => {
  const navigate = useNavigate();
  const { authUser }: any = useAuthContext();

  const navigateTo =
    (path: string) => (event: React.MouseEvent<HTMLLIElement>) => {
      event.preventDefault();
      navigate(path);
    };

  return (
    <nav className='border-b-[.125rem] bg-slate-50 border-stone-400 py-2 px-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <li
            className='cursor-pointer flex items-center'
            onClick={navigateTo('/')}
          >
            <span className='mr-4'>
              <FcMindMap size={30} />
            </span>
          </li>

          <ol className='flex'>
            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/chat')}
            >
              Chat
            </li>

            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/profile')}
            >
              Profil
            </li>

            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/forum')}
            >
              Forum
            </li>

            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/linkHub')}
            >
              LinkHub
            </li>

            <li
              className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
              onClick={navigateTo('/courses')}
            >
              Cursuri
            </li>

            {authUser.roles.mentor === true ? (
              <li
                className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
                onClick={navigateTo('/mentorTab')}
              >
                MentorTab
              </li>
            ) : null}

            {authUser.isAdmin === true ? (
              <li
                className='mr-3 hover:underline text-stone-600 cursor-pointer font-bold'
                onClick={navigateTo('/controlPanel')}
              >
                Panou control
              </li>
            ) : null}
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
