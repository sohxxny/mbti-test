import { useEffect } from 'react';
import { LoginForm } from '../components/LoginForm';
import { authStore } from '../zustand/authStore';
import { useNavigate } from 'react-router-dom';

// * 로그인 페이지 컴포넌트
const Login = () => {
  const { isLogin } = authStore();
  const navigate = useNavigate();

  // 로그인 상태면 홈으로 이동
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);

  return <LoginForm />;
};

export default Login;
