import { mbtiDescriptions } from '../utils/mbtiCalculator';

/**
 * @param {Object} props
 * @param {string} props.result - 검사 결과 MBTI
 * @returns {JSX.Element} 검사 결과 컴포넌트
 */
export const MyResult = ({ result }) => {
  return (
    <div>
      <h2>테스트 결과: {result}</h2>
      <p>{mbtiDescriptions[result]}</p>
      <button>결과 페이지로 이동하기</button>
    </div>
  );
};
