import { FcMindMap } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Navbar from '../../components/Navbar';

const Home = () => {
  const navigate = useNavigate();
  const authContext = useAuthContext();

  const navigateToLinkHub = () => {
    if (authContext && authContext.authUser) {
      navigate('/linkHub');
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='min-h-screen bg-orange-50'>
      {authContext && authContext.authUser ? <Navbar /> : null}
      <section className='bg-emerald-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <div className='w-fit mx-auto'>
            <FcMindMap size={100} />
          </div>
          <h2 className='text-4xl font-bold mb-4'>
            Conectează-te cu Mentori, Atinge-ți Obiectivele
          </h2>
          <p className='text-lg mb-8'>
            Alătură-te MentorLink pentru a găsi mentori care te vor ajuta să te
            dezvolți în cariera și viața personală.
          </p>
          <button
            onClick={navigateToLinkHub}
            className='bg-white text-emerald-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200'
          >
            Începe Acum
          </button>
        </div>
      </section>

      <section className='py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold mb-12'>Caracteristici</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl font-semibold mb-4'>Găsește un Mentor</h4>
              <p className='text-gray-700'>
                Conectează-te ușor cu mentori experimentați în domeniul tău
                pentru a primi îndrumare și suport.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl font-semibold mb-4'>
                Urmărește-ți Progresul
              </h4>
              <p className='text-gray-700'>
                Ține evidența obiectivelor și progresului tău cu ajutorul
                tabloului nostru de bord cuprinzător.
              </p>
            </div>
            <div className='bg-white p-6 rounded-lg shadow-lg'>
              <h4 className='text-xl font-semibold mb-4'>Câștigă Insigne</h4>
              <p className='text-gray-700'>
                Câștigă insigne pentru atingerea reperelor și menține-te
                motivat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-emerald-600 text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='text-3xl font-bold mb-4'>Ești Pregătit să Începi?</h3>
          <p className='text-lg mb-8'>
            Alătură-te MentorLink astăzi și fă primul pas spre atingerea
            obiectivelor tale.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className='bg-white text-emerald-600 py-2 px-6 rounded-full font-semibold hover:bg-gray-200'
          >
            Înregistrează-te Acum
          </button>
        </div>
      </section>

      <footer className='bg-gray-800 text-white py-6'>
        <div className='container mx-auto px-4 text-center'>
          <p>&copy; 2024 MentorLink. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
