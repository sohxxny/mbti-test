import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { useFetchUser } from '../hooks/useFetchUser';

export const Layout = () => {
  // 토큰 유효성 검사 및 유저 정보 불러오기
  useFetchUser(true);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
