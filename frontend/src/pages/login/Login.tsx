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
    <div className='flex flex-col itmes-center justify-center items-center min-w-96 mx-auto bg-stone-300 min-h-screen'>
      <h1 className='text-6xl my-6 text-white tracking-wider'>MentorLink</h1>
      <div className='max-w-96 bg-zinc-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-6'>
        <h1 className='text-2xl font-bold text-center text-black'>
          Logare cont
        </h1>
        <form>
          <div className='my-2'>
            <input
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              type='text'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              placeholder='Parolă'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='w-full mt-6'>
            <button
              className='btn btn-sm w-full'
              disabled={loading}
              onClick={handleSubmit}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Logare'
              )}
            </button>
          </div>

          <Link to='/signup' className='link text-black'>
            Nu ai un cont? Înregistrează-te aici!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
