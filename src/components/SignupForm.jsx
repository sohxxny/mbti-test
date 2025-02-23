import { Link } from 'react-router-dom';
import { AuthForm } from './AuthForm';

// * 회원가입 폼 컴포넌트
export const SignupForm = () => {
  return (
    <div>
      <h2>회원가입</h2>
      <AuthForm type="signup" />
      <p>
        이미 계정이 있으신가요?<Link to="/login">로그인</Link>
      </p>
    </div>
  );
};
