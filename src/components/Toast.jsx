import { ToastContainer } from 'react-toastify';

// * 토스트 컨테이너
export const CustomToastContainer = () => (
  <ToastContainer
    toastClassName="bg-white shadow-md text-sm rounded-lg p-5 mb-3 max-w-xs mx-auto"
    bodyClassName="p-0 m-0 flex text-center"
  />
);
