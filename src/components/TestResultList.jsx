import { mbtiDescriptions } from '../utils/mbtiCalculator';
import { formatDate } from '../utils/formatDate';
import { authStore } from '../zustand/authStore';
import {
  deleteTestResult,
  updateTestResultVisibility,
} from '../api/testResult';
import { useState } from 'react';
import { errorToast, successToast } from '../utils/toastConfig';

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
    results.filter((item) => item.visibility || item.userId === id).reverse()
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
        successToast('삭제되었습니다.');
      } catch (error) {
        console.error(error);
        errorToast(error.message);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-xl p-10 rounded-xl w-[90%] m-10 gap-10 bg-[#fbfbfd]">
      <h2 className="font-semibold text-3xl m-5">
        다른 사람들의 결과를 확인해볼까요?
      </h2>
      {results.length === 0 ? (
        <p className="text-sm font-semibold text-gray-500 m-5">
          아직 결과가 없습니다.
        </p>
      ) : (
        filteredResults.map((result) => (
          <TestResultItem
            key={result.id}
            result={result}
            handleDeleteResult={handleDeleteResult}
          />
        ))
      )}
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
      successToast(`${isVisibility ? '비공개' : '공개'}로 전환되었습니다.`);
      setVisibility(!isVisibility);
    } catch (error) {
      console.error(error);
      errorToast(error.message);
    }
  };

  return (
    <div className="flex flex-col shadow-lg p-10 rounded-xl w-[90%] max-w-[700px] min-w-[300px] bg-[#34495e] text-white">
      <div className="flex justify-center items-center border-b border-gray-500 pb-5">
        <h4 className="flex-grow font-semibold text-lg">{result.nickname}</h4>
        <span className="font-light text-sm">{formatDate(result.date)}</span>
      </div>
      <h4 className="font-semibold text-3xl pt-5 pb-3 text-[#FFDC00]">
        {result.result}
      </h4>
      <p>{mbtiDescriptions[result.result]}</p>
      {id === result.userId ? (
        <div className="flex ml-auto gap-3 mt-5">
          <button
            onClick={handleVisibilityToggle}
            className="px-4 py-2 font-semibold rounded-lg shadow bg-[#edf6fc] hover:bg-[#d7eaf8] text-[#444444]"
          >
            {isVisibility ? '비공개로 전환' : '공개로 전환'}
          </button>
          <button
            onClick={() => handleDeleteResult(result.id)}
            className="px-4 py-2 font-semibold rounded-lg shadow bg-[#f1674f] hover:bg-[#ea573d] text-white"
          >
            삭제
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
