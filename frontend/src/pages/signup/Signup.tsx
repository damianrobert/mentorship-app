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
    <div className='flex flex-col itmes-center justify-center items-center min-w-96 mx-auto bg-auth min-h-screen'>
      <h1 className='text-6xl my-6 text-white'>MentorLink</h1>
      <div className='max-w-96 bg-green-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 p-6'>
        <h1 className='text-2xl font-bold text-center'>Signup</h1>
        <form>
          <div className='my-2'>
            <input
              className='input input-bordered input-sm w-full max-w-xs'
              type='text'
              placeholder='First Name'
              value={inputs.firstName}
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm w-full max-w-xs'
              type='text'
              placeholder='Last Name'
              value={inputs.lastName}
              onChange={(e) =>
                setInputs({ ...inputs, lastName: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              type='text'
              className='input input-bordered input-sm w-full max-w-xs'
              placeholder='Email'
              value={inputs.email}
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
            />
          </div>

          <div className='my-2'>
            <input
              placeholder='Password'
              type='password'
              className='input input-bordered input-sm w-full max-w-xs'
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div className='my-2'>
            <input
              className='input input-bordered input-sm w-full max-w-xs'
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
              className='btn btn-sm btn-accent w-full'
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Signup'
              )}
            </button>
          </div>

          <Link to='/login' className='link'>
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
