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
    <div className="flex flex-col justify-center items-center shadow-lg py-10 px-20 rounded-xl w-[80%] max-w-[700px] m-10 bg-[#fbfbfd]">
      <span className="font-semibold text-gray-600">나의 MBTI는</span>
      <h2 className="font-semibold text-5xl m-5">{result}</h2>
      <p className="my-5">{mbtiDescriptions[result]}</p>
      <button
        onClick={handleNavigateToResults}
        className="w-full px-5 py-4 m-3 font-semibold rounded-lg bg-[#34495e] hover:bg-[#425e79] text-white my-5"
      >
        결과 페이지로 이동하기
      </button>
    </div>
  );
};
