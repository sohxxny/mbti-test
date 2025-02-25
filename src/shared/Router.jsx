import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Profile from '../pages/Profile';
import { authStore } from '../zustand/authStore';
import { Layout } from '../components/Layout';
import { Test } from '../pages/Test';
import { Results } from '../pages/Results';
import { warningToast } from '../utils/toastConfig';

export const Router = () => {
  // * 인증된 사용자만 접근할 수 있는 라우트 제공
  const PrivateRoute = () => {
    const { isLogin } = authStore();

    if (!isLogin) {
      warningToast('로그인이 필요합니다.');
      return <Navigate to="/login" />;
    }

    return <Outlet />;
  };

  // * 비인증 사용자만 접근할 수 있는 라우트 제공
  const PublicRoute = () => {
    const { isLogin } = authStore();
    return !isLogin ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* shared 페이지 */}
          <Route path="/" element={<Home />} />

          {/* public 라우트 */}
          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* private 라우트 */}
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
            <Route path="/results" element={<Results />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
