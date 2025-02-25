import { Bounce, toast } from 'react-toastify';

export const defaultToast = (message) => {
  toast(message, toastOptions);
};

export const successToast = (message) => {
  toast.success(message, toastOptions);
};

export const warningToast = (message) => {
  toast.warn(message, toastOptions);
};

export const errorToast = (message) => {
  toast.error(message, toastOptions);
};

// 토스트 설정
export const toastOptions = {
  position: 'top-center',
  autoClose: 1000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  closeButton: false,
  transition: Bounce,
};
