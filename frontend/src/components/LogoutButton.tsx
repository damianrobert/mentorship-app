import useLogout from '../hooks/useLogut';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {!loading ? (
        <>
          <button
            className='btn btn-sm btn-ghost hover:btn-outline text-zinc-700'
            onClick={() =>
              (document.getElementById(
                'my_modal_1'
              ) as HTMLDialogElement)!.showModal()
            }
          >
            Deconectare
          </button>
          <dialog id='my_modal_1' className='modal'>
            <div className='modal-box'>
              <h3 className='font-bold text-lg'>Hello!</h3>
              <p className='py-4'>
                Ești sigur că vrei să te deconectezi din contul tău?
              </p>
              <div className='modal-action'>
                <button
                  className='btn btn-sm btn-outline btn-error'
                  onClick={logout}
                >
                  Deconectare
                </button>
                <form method='dialog'>
                  {/* if there is a button in form, it will close the modal */}
                  <button className='btn btn-sm btn-neutral'>Anulează</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
