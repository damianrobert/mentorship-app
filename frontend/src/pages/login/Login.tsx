import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, login } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className='flex flex-col itmes-center justify-center items-center min-w-96 mx-auto bg-auth min-h-screen'>
      <h1 className='text-6xl my-6 text-white'>MentorLink</h1>
      <div className='max-w-96 bg-green-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-6'>
        <h1 className='text-2xl font-bold text-center'>Login</h1>
        <form>
          <div className='my-2'>
            <input
              className='input input-bordered input-sm w-full max-w-xs'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm w-full max-w-xs'
              placeholder='Password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='w-full mt-6'>
            <button
              className='btn btn-sm btn-accent w-full'
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>

          <Link to='/signup' className='link'>
            Don't have an account? Sign up
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
