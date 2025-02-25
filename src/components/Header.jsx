import { Link } from 'react-router-dom';
import { authStore } from '../zustand/authStore';

export const Header = () => {
  const { isLogin, setLogin, setUser } = authStore();

  // * 로그아웃 버튼 핸들러
  const handleLogout = () => {
    const confirmLogout = confirm('로그아웃 하시겠습니까?');
    if (confirmLogout) {
      localStorage.removeItem('token');
      setUser(null);
      setLogin(false);
    }
  };

  return (
    <header className="w-full p-10 bg-[#34495e] text-white shadow-md">
      <nav className="flex items-center text-sm font-semibold gap-5">
        <Link
          to="/"
          className="flex-grow text-lg text-[#FFCC00] hover:text-[#FFDC00]"
        >
          홈
        </Link>
        {isLogin ? (
          <>
            <Link to="/profile" className="hover:text-[#FFCC00]">
              프로필
            </Link>
            <Link to="/test" className="hover:text-[#FFCC00]">
              테스트
            </Link>
            <Link to="/results" className="hover:text-[#FFCC00]">
              결과 보기
            </Link>
            <button onClick={handleLogout} className="hover:text-[#FFCC00]">
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login" className="hover:text-[#FFCC00]">
            로그인
          </Link>
        )}
      </nav>
    </header>
  );
};
