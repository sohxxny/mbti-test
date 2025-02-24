import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { useFetchUser } from '../hooks/useFetchUser';

export const Layout = () => {
  useFetchUser();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
