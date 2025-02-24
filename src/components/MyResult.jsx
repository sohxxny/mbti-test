import { useNavigate } from 'react-router-dom';
import { mbtiDescriptions } from '../utils/mbtiCalculator';

/**
 * @param {Object} props
 * @param {string} props.result - 검사 결과 MBTI
 * @returns {JSX.Element} 검사 결과 컴포넌트
 */
export const MyResult = ({ result }) => {
  const navigate = useNavigate();

  // 테스트 결과 리스트 페이지로 이동
  const handleNavigateToResults = () => {
    navigate('/results');
  };

  return (
    <div>
      <h2>테스트 결과: {result}</h2>
      <p>{mbtiDescriptions[result]}</p>
      <button onClick={handleNavigateToResults}>결과 페이지로 이동하기</button>
    </div>
  );
};
