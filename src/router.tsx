import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Top from './views/Top';

const Router: FC = function () {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
    </Routes>
  );
};

export default Router;
