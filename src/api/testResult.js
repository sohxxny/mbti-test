import axios from 'axios';

const apiUrl = import.meta.env.VITE_RESULTS_API_URL;

/**
 * * 전체 결과 리스트를 가져오는 함수
 * @returns {Object} - 결과 리스트 가져오기 성공 시 서버 응답 데이터
 */
export const getTestResults = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 리스트에 결과를 추가하는 함수
 * @param {Object} result - 결과 정보 객체 { id, nickname, result, visibility, date, userId }
 * @returns {Object} - 결과 추가 성공 시 서버 응답 데이터
 */
export const createTestResult = async (result) => {
  try {
    const response = await axios.post(`${apiUrl}`, result);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 결과의 공개/비공개 여부를 바꾸는 함수
 * @param {string} id - 바꾸고자 하는 테스트 결과 객체의 id
 * @param {boolean} visibility - 바꾸고 싶은 값 (true: 공개, false: 비공개)
 * @returns {Object} - 결과 추가 성공 시 서버 응답 데이터
 */
export const updateTestResultVisibility = async (id, visibility) => {
  try {
    const response = await axios.patch(`${apiUrl}/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 결과 하나를 지우는 함수
 * @param {string} id - 지우고자 하는 결과의 id 값
 * @returns {Object} - 결과 추가 성공 시 서버 응답 데이터
 */
export const deleteTestResult = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};
