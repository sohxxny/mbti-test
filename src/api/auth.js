import axios from 'axios';

const API_URL = 'https://www.nbcamp-react-auth.link';

/**
 * * 회원가입 함수
 * @param {Object} userData - 회원가입에 필요한 사용자 데이터 { email, password, nickname }
 * @returns {Promise<Object>} 회원가입 성공 시 서버 응답 데이터 { message, success }
 * @throws {Error} 회원가입 실패 시 에러 메시지를 포함한 Error 객체
 */
export const register = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 로그인 함수
 * @param {Object} userData - 로그인에 필요한 사용자 데이터 { email, password }
 * @returns {Promise<Object>} 로그인 성공 시 서버 응답 데이터
 *   response.data - { accessToken, avatar, nickname, success, userId }
 * @throws {Error} 로그인 실패 시 에러 메시지를 포함한 Error 객체
 */
export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};
