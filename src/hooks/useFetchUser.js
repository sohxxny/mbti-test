import { useEffect } from 'react';
import { getUserProfile } from '../api/auth';
import { authStore } from '../zustand/authStore';
import { useNavigate } from 'react-router-dom';

/**
 * * 로컬 스토리지의 토큰으로부터 유저 정보를 가져오는 커스텀 훅
 * @param {boolean} isAuthPage - 인증 관련 페이지 여부 (login, signup만 true)
 */
export const useFetchUser = (isAuthPage) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const { setLogin, setUser } = authStore();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getUserProfile(token);
        const { avatar, nickname } = response;
        setUser({ avatar, nickname });
        setLogin(true);
      } catch (error) {
        // 토큰 관련 오류
        if (error.status === 401 || error.status === 403) {
          localStorage.removeItem('token');
          setUser(null);
          setLogin(false);
          if (!isAuthPage) {
            alert('로그인이 필요합니다.');
            navigate('/login');
          }
          return;
        }
        alert(error.message);
      }
    };
    fetchUser();
  }, [navigate, token, setUser, setLogin, isAuthPage]);
};
