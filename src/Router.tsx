import { User } from 'firebase/auth';
import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from './firebase/authContext';
import New from './pages/new';

const Auth = React.lazy(() => import('./pages/auth'));
const Home = React.lazy(() => import('./pages/home'));

const Loading = () => <p>Loading ...</p>;

const Protected = ({ user, children } : { user: User | null, children: any}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const Router = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth' element={currentUser ? <Navigate to="/home" /> : <Auth />} />

        <Route path='/home' element={
          <Protected user={currentUser}>
            <Home />
          </Protected>
        } />
        
        <Route path='/new' element={
          <Protected user={currentUser}>
            <New />
          </Protected>
        } />

        <Route
          path="*"
          element={
            currentUser ? <Navigate to="/home" /> : <Navigate to="/auth" />
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default Router;