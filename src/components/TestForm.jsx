import { useState } from 'react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';
import { createTestResult } from '../api/testResult';
import { authStore } from '../zustand/authStore';

/**
 * * 테스트 폼 컴포넌트
 * @param {Object} props
 * @param {Function} props.setResult - 결과를 set하는 함수
 * @returns {JSX.Element} questions 배열을 기반으로 그린 테스트 폼 컴포넌트
 */
export const TestForm = ({ setResult }) => {
  const { user, id } = authStore();
  /**
   * * 테스트 답변 상태 객체 배열
   * 질문 수만큼 빈 type, answer 값 할당
   * 객체 예시 - { type: 'E/I', answer: '같이 놀아준다' }
   */
  const [answers, setAnswers] = useState(
    Array(questions.length).fill({ type: '', answer: '' })
  );

  /**
   * * 질문 라디오박스 변경 핸들러
   * @param {number} index - 질문 번호
   * @param {string} answer
   */
  const handleChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = { type: questions[index].type, answer };
    setAnswers(newAnswers);
  };

  /**
   * * 테스트 폼 결과 제출 핸들러
   * @param {React.FormEvent<HTMLFormElement>} e - 이벤트 객체
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (answers.some((item) => !item.answer)) {
      alert('모든 질문에 응답해주세요!');
      return;
    }
    const mbtiResult = calculateMBTI(answers);
    setResult(mbtiResult);
    // DB에 데이터 저장
    createTestResult({
      nickname: user.nickname,
      result: mbtiResult,
      visibility: false,
      date: new Date(),
      userId: id,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-xl p-10 rounded-xl w-[90%] m-10 bg-[#fbfbfd]">
      <h2 className="font-semibold text-3xl m-5">MBTI 테스트</h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 m-5">
        {questions.map((question, index) => (
          <div key={question.id} className="flex flex-col w-full p-5 gap-2">
            <p className="font-semibold text-lg my-2">
              {index + 1}. {question.question}
            </p>
            {question.options.map((option, i) => (
              <label
                key={i}
                className="flex p-3 border rounded-lg bg-white hover:bg-[#edf6fc]"
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                />
                <p className="mx-2">{option}</p>
              </label>
            ))}
          </div>
        ))}
        <button
          type="submit"
          className="w-full px-5 py-4 m-3 font-semibold rounded-lg bg-[#34495e] hover:bg-[#425e79] text-white"
        >
          제출하기
        </button>
      </form>
    </div>
  );
};
