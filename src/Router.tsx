import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import New from './pages/new';

const Auth = React.lazy(() => import('./pages/auth'));
const Home = React.lazy(() => import('./pages/home'));

const Loading = () => <p>Loading ...</p>;

const Router = (user:any) => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/new' element={<New />} />
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