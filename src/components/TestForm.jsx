import { useState } from 'react';
import { questions } from '../data/questions';
import { calculateMBTI } from '../utils/mbtiCalculator';

/**
 * * 테스트 폼 컴포넌트
 * @param {Object} props
 * @param {Object} props.setResult - 결과를 set하는 함수
 * @returns {JSX.Element} questions 배열을 기반으로 그린 테스트 폼 컴포넌트
 */
export const TestForm = ({ setResult }) => {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answers.some((item) => !item.answer)) {
      alert('모든 질문에 응답해주세요!');
      return;
    }
    const result = calculateMBTI(answers);
    setResult(result);
  };

  return (
    <div>
      <h2>MBTI 테스트</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((question, index) => (
          <div key={question.id}>
            <p>{question.question}</p>
            {question.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[index]?.answer === option}
                  onChange={() => handleChange(index, option)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};
