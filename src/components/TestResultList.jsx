import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { formatDate } from '../utils/formatDate';

/**
 * * 테스트 결과 리스트
 * @param {Object} props
 * @param {Array[Object]} props.results - 테스트 결과 배열
 *    [{ id, nickname, result, visibility, date, userId }]
 * @returns {JSX.Element} 테스트 결과 리스트 컴포넌트
 */
export const TestResultList = ({ results }) => {
  return (
    <div>
      <h2>모든 테스트 결과</h2>
      {results.map((result) => (
        <TestResultItem key={result.id} result={result} />
      ))}
    </div>
  );
};

/**
 * * 1개의 결과 객체
 * @param {Object} props
 * @param {Object} props.result - 테스트 결과
 *    { id, nickname, result, visibility, date, userId }
 * @returns {JSX.Element} 1개의 테스트 결과 컴포넌트
 */
const TestResultItem = ({ result }) => {
  return (
    <div>
      <div>
        <h4>{result.nickname}</h4>
        <span>{formatDate(result.date)}</span>
      </div>
      <h4>{result.result}</h4>
      <p>{mbtiDescriptions[result.result]}</p>
    </div>
  );
};
