import { useState } from 'react';
import { login, register } from '../api/auth';
import { useNavigate } from 'react-router-dom';

/**
 * * 로그인과 회원가입에 사용되는 폼 컴포넌트
 * @param {Object} props
 * @param {string} props.type - 폼의 타입 ('signup' 또는 'login')
 * @returns {JSX.Element} 로그인 또는 회원가입 폼 컴포넌트
 */
export const AuthForm = ({ type }) => {
  // 폼 데이터 상태
  const [formData, setFormData] = useState({
    id: '',
    password: '',
    nickname: '',
  });

  const navigate = useNavigate();

  /**
   * * 아이디/비밀번호/닉네임 입력 필드 변경 핸들러
   * @param {React.ChangeEvent<HTMLInputElement>} e - 이벤트 객체
   */
  const handleChange = (e) => {
    const name = e.target.name;
    setFormData({
      ...formData,
      [name]: e.target.value,
    });
  };

  /**
   * * 로그인 및 회원가입 폼 제출 핸들러
   * @param {React.FormEvent<HTMLFormElement>} e - 이벤트 객체
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    // 로그인
    if (type === 'login') {
      const { id, password } = formData;
      try {
        await login({ id, password });
        alert('로그인이 완료되었습니다! 홈으로 이동합니다.');
        navigate('/');
      } catch (error) {
        alert(error.message);
      }
      // 회원가입
    } else {
      try {
        await register(formData);
        alert('회원가입이 완료되었습니다! 로그인 페이지로 이동합니다.');
        navigate('/login');
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        value={formData.email}
        onChange={handleChange}
        placeholder="아이디"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="비밀번호"
      />
      {type === 'signup' && (
        <input
          type="text"
          name="nickname"
          value={formData.nickname}
          onChange={handleChange}
          placeholder="닉네임"
        />
      )}
      <button type="submit">{type === 'login' ? '로그인' : '회원가입'}</button>
    </form>
  );
};
