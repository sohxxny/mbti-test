import { ProfileCard } from '../components/ProfileCard';
import { useFetchUser } from '../hooks/useFetchUser';

// * 프로필 페이지 (마이페이지) 컴포넌트
const Profile = () => {
  // 토큰 유효성 검사 및 유저 정보 불러오기
  useFetchUser(false);

  return <ProfileCard />;
};

export default Profile;
