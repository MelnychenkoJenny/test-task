import { Error } from 'components/Error';
import { Layout } from 'components/Layout';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
const Recipes = lazy(() => import('page/Recipes'));
const RecipesDetails = lazy(() => import('page/RecipesDetails'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Recipes />} />
          <Route path="/:id" element={<RecipesDetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};
