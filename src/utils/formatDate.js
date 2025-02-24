/**
 * * 날짜 문자열을 받아 지정된 형식의 문자열로 반환하는 함수
 * @param {string} dateString - 날짜 객체로부터 생성된 문자열
 * @returns {string} - '2025.02.24 PM 3:30' 형식의 문자열
 */
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}.${month}.${day} ${ampm} ${hours}:${minutes}`;
};
