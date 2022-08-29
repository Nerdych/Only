import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../context';
import { LoginPage } from '../../pages/LoginPage';
import { ProfilePage } from '../../pages/ProfilePage';
import { routes } from '../routes';

export const AppRouter: React.FC = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={routes.LOGIN} element={<LoginPage />} />
          {user && <Route path={routes.PROFILE} element={<ProfilePage />} />}
          <Route path="*" element={<Navigate to={routes.LOGIN} replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
