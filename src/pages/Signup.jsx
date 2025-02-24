import { useNavigate } from 'react-router-dom';
import { SignupForm } from '../components/SignupForm';
import { authStore } from '../zustand/authStore';
import { useEffect } from 'react';
import { useFetchUser } from '../hooks/useFetchUser';

// * 회원가입 페이지 컴포넌트
const Signup = () => {
  // 토큰 유효성 검사 및 유저 정보 불러오기
  useFetchUser(true);

  const { isLogin } = authStore();
  const navigate = useNavigate();

  // 로그인 상태면 홈으로 이동
  useEffect(() => {
    if (isLogin) {
      navigate('/');
    }
  }, [isLogin, navigate]);
  return <SignupForm />;
};

export default Signup;
