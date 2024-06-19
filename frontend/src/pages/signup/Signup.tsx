import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup.ts';

function SignUp() {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    username: '',
  });

  const { loading, signup } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(inputs);
  };

  return (
    <div className='flex flex-col itmes-center justify-center items-center min-w-96 mx-auto bg-stone-300 min-h-screen'>
      <h1 className='text-6xl my-6 text-white tracking-wider'>MentorLink</h1>
      <div className='max-w-96 bg-zinc-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-6'>
        <h1 className='text-2xl font-bold text-center text-black'>
          Înregistrare
        </h1>
        <form>
          <div className='my-2'>
            <input
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              type='text'
              placeholder='Prenume'
              value={inputs.firstName}
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              type='text'
              placeholder='Nume'
              value={inputs.lastName}
              onChange={(e) =>
                setInputs({ ...inputs, lastName: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              type='text'
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              placeholder='Email'
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div className='my-2'>
            <input
              placeholder='Parolă'
              type='password'
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm bg-white w-full max-w-xs text-black'
              placeholder='Username'
              type='text'
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>

          <div className='w-full mt-6'>
            <button
              className='btn btn-sm w-full'
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Înregistrare'
              )}
            </button>
          </div>

          <Link to='/login' className='link text-black'>
            Ai deja un cont? Logare aici!
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
