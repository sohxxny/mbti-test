import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

/**
 * * 회원가입 함수
 * @param {Object} userData - 회원가입에 필요한 사용자 데이터 { email, password, nickname }
 * @returns {Promise<Object>} 회원가입 성공 시 서버 응답 데이터 { message, success }
 */
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};
