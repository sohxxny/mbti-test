import { Link } from 'react-router-dom';
import { AuthForm } from './AuthForm';

// * 회원가입 폼 컴포넌트
export const SignupForm = () => {
  return (
    <div className="flex flex-col justify-center items-center shadow-xl p-10 rounded-xl w-[500px] m-10 bg-[#fbfbfd]">
      <h2 className="font-semibold text-3xl m-5">회원가입</h2>
      <AuthForm type="signup" />
      <div className="flex flex-row justify-center items-center gap-2 m-4">
        <span className="text-gray-500">이미 계정이 있으신가요?</span>
        <Link
          to="/login"
          className="font-semibold no-underline hover:underline"
        >
          로그인
        </Link>
      </div>
    </div>
  );
};
