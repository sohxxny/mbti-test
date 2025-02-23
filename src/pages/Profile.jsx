import { useEffect, useState } from 'react';
import { ProfileCard } from '../components/ProfileCard';
import { useNavigate } from 'react-router-dom';
import { getUserProfile } from '../api/auth';

// * 프로필 페이지 (마이페이지) 컴포넌트
const Profile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  // TODO - 프로덕션 모드에서 문제 없이 실행되는지 확인하기
  useEffect(() => {
    const token = localStorage.getItem('token');
    // * 로그인 체크 함수
    const checkLogin = async () => {
      // 토큰 없을 경우 로그인 페이지로 이동
      if (!token) {
        alert('로그인이 필요합니다.');
        navigate('/login');
        return;
      }

      // 회원 정보 저장
      try {
        const data = await getUserProfile(token);
        setUserProfile(data);
      } catch (error) {
        // 토큰 만료되었을 경우 로그인 페이지로 이동
        alert(error.message);
        navigate('/login');
        return;
      }
    };

    checkLogin();
  }, [navigate]);

  if (!userProfile) {
    return <p>로딩중입니다...</p>;
  }

  return <ProfileCard userProfile={userProfile} />;
};

export default Profile;
