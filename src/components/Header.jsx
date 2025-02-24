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
    <header>
      <nav>
        <Link to="/">홈</Link>
        {isLogin ? (
          <>
            <Link to="/profile">프로필</Link>
            <Link to="/">테스트</Link>
            <Link to="/">결과 보기</Link>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
};
