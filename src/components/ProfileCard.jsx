import { useState } from 'react';
import { updateProfile } from '../api/auth';

/**
 * * 유저 프로필 카드 컴포넌트
 * @param {Object} props
 * @param {Object} props.userProfile - 사용자 정보
 *    { avatar, id, nickname, success }
 * @param {string} props.token - 사용자의 access token
 * @returns {JSX.Element} 사용자 프로필 컴포넌트
 */
export const ProfileCard = ({ userProfile, token }) => {
  const [nickname, setNickname] = useState(userProfile.nickname);

  /**
   * * 프로필 변경 폼 제출 핸들러
   * @param {React.FormEvent<HTMLFormElement>} e - 이벤트 객체
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nickname', nickname);

    try {
      const data = await updateProfile(formData, token);
      alert(data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>프로필 수정</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          name="nickname"
        />
        <button type="submit">프로필 업데이트</button>
      </form>
    </div>
  );
};
