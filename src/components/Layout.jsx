import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { useFetchUser } from '../hooks/useFetchUser';

export const Layout = () => {
  useFetchUser();

  return (
    <div>
      <Header />
      <main className="p-10">
        <Outlet />
      </main>
    </div>
  );
};
