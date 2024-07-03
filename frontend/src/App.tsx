import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useAuthContext } from './context/AuthContext';
import SignUp from './pages/signup/Signup';
import Login from './pages/login/Login';
import Home from './pages/homepage/Home';
import Chat from './pages/chat/Chat';
import Profile from './pages/profile/Profile';
import Forum from './pages/forum/Forum';
import ControlPanel from './pages/controlPanel/ControlPanel';
import LinkHub from './pages/linkHub/LinkHub';
import MentorTab from './pages/mentorTab/MentorTab';
import Courses from './pages/courses/Courses';

function App() {
  const authContext = useAuthContext();
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={authContext && authContext.authUser ? <Home /> : <Home />}
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

        <Route
          path='/profile'
          element={
            authContext && authContext.authUser ? (
              <Profile />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route
          path='/forum'
          element={
            authContext && authContext.authUser ? (
              <Forum />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route
          path='/controlPanel'
          element={
            authContext && authContext.authUser ? (
              <ControlPanel />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route
          path='/linkHub'
          element={
            authContext && authContext.authUser ? (
              <LinkHub />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route
          path='/courses'
          element={
            authContext && authContext.authUser ? (
              <Courses />
            ) : (
              <Navigate to='/login' />
            )
          }
        />

        <Route
          path='/mentorTab'
          element={
            authContext && authContext.authUser ? (
              <MentorTab />
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
