import { useEffect, useState } from 'react';
import { getTestResults } from '../api/testResult';
import { TestResultList } from '../components/TestResultList';
import { errorToast } from '../utils/toastConfig';

// * 결과 리스트 페이지 컴포넌트
export const Results = () => {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getTestResults();
        setResults(data);
      } catch (error) {
        errorToast(error.message);
        console.error(error);
      }
    };
    fetchResults();
  }, []);

  if (!results) {
    return (
      <div className="h-[70vh] flex justify-center items-center">
        <span className="text-sm font-semibold">로딩중입니다...</span>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center">
      <TestResultList results={results} />
    </div>
  );
};
