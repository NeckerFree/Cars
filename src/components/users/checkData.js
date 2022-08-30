const checkData = (setIsSubmitted) => {
  if (localStorage.getItem('token') !== null) {
    setIsSubmitted(true);
    const user = localStorage.getItem('user_id');
    window.location.href = `/users/${user}`;
  } else {
    setIsSubmitted(false);
  }
};

const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  localStorage.removeItem('user_name');
};

const getUserName = () => {
  const userName = localStorage.getItem('user_name');
  return userName;
};

const getError = () => {
  const errorMsg = localStorage.getItem('error_message');
  localStorage.removeItem('error_message');
  return errorMsg;
};

const geResponse = () => {
  const responseMsg = localStorage.getItem('response_message');
  localStorage.removeItem('response_message');
  return responseMsg;
};

const setResponse= (message) => {
  localStorage.setItem('response_message', message);
};

const setError= (message) => {
  localStorage.setItem('error_message', message);
};

const removeMessages = () => {
  localStorage.removeItem('response_message');
  localStorage.removeItem('error_message');
};

export default { checkData, removeToken, getUserName, setResponse, setError, removeMessages, getError, geResponse };
