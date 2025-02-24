import { useEffect } from 'react';
import { getUserProfile } from '../api/auth';
import { authStore } from '../zustand/authStore';
import { useNavigate } from 'react-router-dom';

/**
 * * 로컬 스토리지의 토큰으로부터 유저 정보를 가져오는 커스텀 훅
 * @param {boolean} isAuthPage - 인증 관련 페이지 여부
 *    (로그인 페이지로 리다이렉트 필요하지 않을 경우 true)
 */
export const useFetchUser = (isAuthPage) => {
  const navigate = useNavigate();
  const { user, setUser, isLogin, setLogin } = authStore();

  useEffect(() => {
    const token = localStorage.getItem('token');

    // * 유저 정보를 가져오는 함수
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
          user && setUser(null);
          isLogin && setLogin(false);
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
  }, [navigate, user, setUser, isLogin, setLogin, isAuthPage]);
};
