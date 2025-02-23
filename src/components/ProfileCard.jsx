import { useState } from 'react';

export const ProfileCard = ({ userProfile }) => {
  const [nickname, setNickname] = useState(userProfile.nickname);
  return (
    <div>
      <h2>프로필 수정</h2>
      <form>
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
