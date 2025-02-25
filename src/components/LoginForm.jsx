import { Link } from 'react-router-dom';
import { AuthForm } from './AuthForm';

// * 로그인 폼 컴포넌트
export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-xl p-10 rounded-xl w-[500px] m-10 bg-[#fbfbfd]">
      <h2 className="font-semibold text-3xl m-5">로그인</h2>
      <AuthForm type="login" />
      <div className="flex flex-row justify-center items-center gap-2 m-4">
        <span className="text-gray-500">계정이 없으신가요?</span>
        <Link
          to="/signup"
          className="font-semibold no-underline hover:underline"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};
