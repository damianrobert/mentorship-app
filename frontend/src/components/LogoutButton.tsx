import useLogout from '../hooks/useLogut';

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div>
      {!loading ? (
        <button
          className='btn btn-sm btn-neutral btn-outline text-zinc-500'
          onClick={logout}
        >
          Logout
        </button>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  );
};

export default LogoutButton;
