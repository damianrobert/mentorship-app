import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/homepage/Home';
import Chat from './pages/chat/Chat';

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

        <Route
          path='/chat'
          element={
            authContext && authContext.authUser ? (
              <Chat />
            ) : (
              <Navigate to='/login' />
            )
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
