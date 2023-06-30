import React from 'react';
import { Routes, Route } from 'react-router-dom';
import New from './pages/new';

const Auth = React.lazy(() => import('./pages/auth'));
const Home = React.lazy(() => import('./pages/home'));

const Loading = () => <p>Loading ...</p>;

const Router = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/auth' element={<Auth/>} />
        <Route path='/home' element={<Home />} />
        <Route path='/new' element={<New />} />
      </Routes>
    </React.Suspense>
  );
}

export default Router;