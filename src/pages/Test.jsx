import { useState } from 'react';
import { TestForm } from '../components/TestForm';
import { MyResult } from '../components/MyResult';

// * 테스트 페이지 컴포넌트
export const Test = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="flex justify-center items-center">
      {!result ? (
        <TestForm setResult={setResult} />
      ) : (
        <MyResult result={result} />
      )}
    </div>
  );
};
