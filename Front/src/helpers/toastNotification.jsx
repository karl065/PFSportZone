import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function successToast(message = "Success!", closeTime = 1000) {
  toast.success(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: closeTime,
  });
}

export function errorToast(message = "Error!", closeTime = 1000) {
  toast.error(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: closeTime,
  });
}

export function infoToast(message = "Info!", closeTime = 1000) {
  toast.info(message, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: closeTime,
  });
}
