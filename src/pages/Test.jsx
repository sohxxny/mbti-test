import { useState } from 'react';
import { TestForm } from '../components/TestForm';

// * 테스트 페이지 컴포넌트
export const Test = () => {
  const [result, setResult] = useState(null);

  return (
    <>
      {!result ? (
        <>
          <h2>MBTI 테스트</h2>
          <TestForm setResult={setResult} />
        </>
      ) : (
        <p>결과 페이지</p>
      )}
    </>
  );
};
