import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { formatDate } from '../utils/formatDate';
import { authStore } from '../zustand/authStore';
import {
  deleteTestResult,
  updateTestResultVisibility,
} from '../api/testResult';
import { useState } from 'react';

/**
 * * 테스트 결과 리스트
 * @param {Object} props
 * @param {Array[Object]} props.results - 테스트 결과 배열
 *    [{ id, nickname, result, visibility, date, userId }]
 * @returns {JSX.Element} 테스트 결과 리스트 컴포넌트
 */
export const TestResultList = ({ results }) => {
  const { id } = authStore();
  const [filteredResults, setFilteredResults] = useState(
    results.filter((item) => item.visibility || item.userId === id)
  );

  /**
   * * id를 받아 해당 테스트 결과를 지우는 함수
   * @param {string} id - 테스트 결과 객체의 id
   */
  const handleDeleteResult = async (id) => {
    const confirmLogout = confirm('삭제하시겠습니까?');
    if (confirmLogout) {
      try {
        await deleteTestResult(id);
        setFilteredResults(filteredResults.filter((item) => item.id !== id));
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
    }
  };

  return (
    <div>
      <h2>모든 테스트 결과</h2>
      {filteredResults.map((result) => (
        <TestResultItem
          key={result.id}
          result={result}
          handleDeleteResult={handleDeleteResult}
        />
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
const TestResultItem = ({ result, handleDeleteResult }) => {
  const { id } = authStore();
  const [isVisibility, setVisibility] = useState(result.visibility);

  // * 공개/비공개 토글 함수
  const handleVisibilityToggle = async () => {
    try {
      await updateTestResultVisibility(result.id, !isVisibility);
      setVisibility(!isVisibility);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div>
      <div>
        <h4>{result.nickname}</h4>
        <span>{formatDate(result.date)}</span>
      </div>
      <h4>{result.result}</h4>
      <p>{mbtiDescriptions[result.result]}</p>
      {id === result.userId ? (
        <>
          <button onClick={handleVisibilityToggle}>
            {isVisibility ? '비공개로 전환' : '공개로 전환'}
          </button>
          <button onClick={() => handleDeleteResult(result.id)}>삭제</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
