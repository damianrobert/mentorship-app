import { useState } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { IoWarningOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';
import usePostArticle from '../../hooks/usePostArticle';

const WriteMode = () => {
  const { loading, postArticle }: any = usePostArticle();
  const { authUser }: any = useAuthContext();
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    author: authUser._id as string,
    genre: [] as string[],
    firstName: authUser.firstName as string,
    lastName: authUser.lastName as string,
  });

  const checkValidity = () => {
    if (inputs.title.length === 0) {
      toast.error('Titlul postării nu poate fi gol.');
      return false;
    }

    if (inputs.content.length === 0) {
      toast.error('Conținutul postării nu poate fi gol.');
      return false;
    }

    if (inputs.genre.length === 0) {
      toast.error('Trebuie să selectezi cel puțin un gen.');
      return false;
    }

    return true;
  };

  const handlePost = async () => {
    await postArticle(inputs);
  };
  return (
    <div className='overflow-hidden'>
      <h1 className='text-2xl text-white text-center'>Scrie o postare</h1>

      <div className='w-fit mx-auto mt-8'>
        <input
          className='input input-md '
          type='text'
          placeholder='Scrie aici titlul postării'
          onChange={(e) => setInputs({ ...inputs, title: e.target.value })}
        />
      </div>

      <p className='mt-6 text-base text-zinc-200'>Conținutul postării</p>
      <textarea
        className='textarea textarea-bordered w-full'
        placeholder='Scrie aici conținutul postării'
        onChange={(e) => setInputs({ ...inputs, content: e.target.value })}
      ></textarea>

      <div className='w-full'>
        <span className='text-[18px] text-zinc-100'>Genul postării:</span>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Programare']
                  : inputs.genre.filter((g) => g !== 'Programare'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>Programare</label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Marketing']
                  : inputs.genre.filter((g) => g !== 'Marketing'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>Marketing</label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Economie']
                  : inputs.genre.filter((g) => g !== 'Economie'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>Economie</label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Finanțe']
                  : inputs.genre.filter((g) => g !== 'Finanțe'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>Finanțe</label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Științe aplicate']
                  : inputs.genre.filter((g) => g !== 'Științe aplicate'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>
            Științe aplicate
          </label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Design grafic']
                  : inputs.genre.filter((g) => g !== 'Design grafic'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>Design grafic</label>
        </div>

        <div className='flex items-center mt-4'>
          <input
            type='checkbox'
            className='checkbox checkbox-accent mr-2'
            onChange={(e) =>
              setInputs({
                ...inputs,
                genre: e.target.checked
                  ? [...inputs.genre, 'Securitate cibernetică']
                  : inputs.genre.filter((g) => g !== 'Securitate cibernetică'),
              })
            }
          />
          <label className='text-zinc-300 font-semibold'>
            Securitate cibernetică
          </label>
        </div>

        <button
          className='btn btn-sm btn-accent w-full mt-8 text-[1.1rem] font-bold'
          onClick={() => {
            const isValidPost = checkValidity();

            if (isValidPost) {
              const modal = document.getElementById(
                'post_modal'
              ) as HTMLDialogElement;
              if (modal) {
                modal.showModal();
              }
            } else return;
          }}
        >
          Postează
        </button>

        {/* MODAL */}
        <dialog id='post_modal' className='modal'>
          <div className='modal-box'>
            <h3 className='font-bold text-lg mb-6'>Bună!</h3>
            <div className='flex items-center'>
              <p className='mr-2'>
                <IoWarningOutline size={24} />
              </p>

              <p className='text-red-400 font-semibold'>
                Ești sigur că vrei să postezi aceast articol?
              </p>
            </div>
            <p className='py-4 text-[12px]'>
              Apasă Esc pentru a închide fereastra de dialog.
            </p>
            <div className='modal-action'>
              <form method='dialog'>
                {/* if there is a button in form, it will close the modal */}
                {loading === true ? (
                  <div className='loading loading-spinner'></div>
                ) : null}
                <button
                  className='btn btn-outline btn-accent'
                  onClick={handlePost}
                >
                  Posteaza
                </button>
                <button className='btn'>Închide</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default WriteMode;
