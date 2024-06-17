import Login from './pages/login/Login';
import SignUp from './pages/signup/Signup';
import Home from './pages/homepage/Home';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';

function App() {
  const authContext = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            authContext && authContext.authUser ? (
              <Home />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
        <Route
          path='/login'
          element={
            authContext && authContext.authUser ? (
              <Navigate to='/' />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path='/signup'
          element={
            authContext && authContext.authUser ? (
              <Navigate to='/' />
            ) : (
              <SignUp />
            )
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
