import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_URL;

/**
 * * 회원가입 함수
 * @param {Object} userData - 회원가입에 필요한 사용자 데이터 { email, password, nickname }
 * @returns {Promise<Object>} 회원가입 성공 시 서버 응답 데이터 { message, success }
 * @throws {Error} 회원가입 실패 시 에러 메시지를 포함한 Error 객체
 */
export const register = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/register`, userData);
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
    const response = await axios.post(`${apiUrl}/login`, userData);
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 회원정보 가져오기 함수
 * @param {string} token - 사용자의 access token
 * @returns {Promise<Object>} 회원정보 가져오기 성공 시 서버 응답 데이터
 *   response.data - { id, nickname, avatar, success }
 * @throws {Error} 회원정보 가져오기 실패 시 에러 객체
 */
export const getUserProfile = async (token) => {
  try {
    const response = await axios.get(`${apiUrl}/user`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * * 사용자 프로필을 변경하는 함수
 * @param {FormData} formData - 업로드할 데이터 { nickname }
 * @param {string} token - 사용자의 access token
 * @returns {Promise<Object>} 프로필 변경 성공 시 서버 응답 데이터
 *   response.data - { avatar, nickname, message, success }
 * @throws {Error} 프로필 변경 실패 시 에러 메시지를 포함한 Error 객체
 */
export const updateProfile = async (formData, token) => {
  try {
    const response = await axios.patch(`${apiUrl}/profile`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};
