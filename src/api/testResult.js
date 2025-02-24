import axios from 'axios';

const apiUrl = import.meta.env.VITE_RESULTS_API_URL;

/**
 * * 전체 결과 리스트를 가져오는 함수
 * @returns {Object} - 결과 리스트 가져오기 성공 시 서버 응답 데이터
 */
export const getTestResults = async () => {
  try {
    const response = await axios.get(`${apiUrl}/testResults`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};

/**
 * * 리스트에 결과를 추가하는 함수
 * @returns {Object} - 결과 추가 성공 시 서버 응답 데이터
 */
export const createTestResult = async (result) => {
  try {
    const response = await axios.post(`${apiUrl}/testResults`, result);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error.response.data.message);
  }
};
