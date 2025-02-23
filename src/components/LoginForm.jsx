import { Link } from 'react-router-dom';
import { AuthForm } from './AuthForm';

// * 로그인 폼 컴포넌트
export const LoginForm = () => {
  return (
    <div>
      <h2>로그인</h2>
      <AuthForm type="login" />
      <p>
        계정이 없으신가요?<Link to="/signup">회원가입</Link>
      </p>
    </div>
  );
};
