import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const showSuccessToast = function(message) {
  toast.success(message, {
    position: 'top-center',
    autoClose: 1000,
    hideProgressBar: true,
    className: 'custom-toast',
  });
};

export const showErrorToast = function(message) {
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: true,
    className: 'custom-error-toast',
  });
};
