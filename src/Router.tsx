import { User } from 'firebase/auth';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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

const Router = ({user} : {user: User | null}) => {

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth' element={user ? <Navigate to="/home" /> : <Auth />} />

        <Route path='/home' element={
          <Protected user={user}>
            <Home />
          </Protected>
        } />
        
        <Route path='/new' element={
          <Protected user={user}>
            <New />
          </Protected>
        } />

        <Route
          path="*"
          element={
            user ? <Navigate to="/home" /> : <Navigate to="/auth" />
          }
        />
      </Routes>
    </React.Suspense>
  );
}

export default Router;