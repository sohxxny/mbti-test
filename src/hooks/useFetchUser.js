import { useEffect } from 'react';
import { getUserProfile } from '../api/auth';
import { authStore } from '../zustand/authStore';
import { useNavigate } from 'react-router-dom';

// * 로컬 스토리지의 토큰으로부터 유저 정보를 가져오는 커스텀 훅
export const useFetchUser = () => {
  const navigate = useNavigate();
  const { setUser, setLogin, setId } = authStore();

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
          setUser(null);
          setId(null);
          setLogin(false);
          return;
        }
        alert(error.message);
      }
    };

    fetchUser();
  }, [navigate, setUser, setId, setLogin]);
};
