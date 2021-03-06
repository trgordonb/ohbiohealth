import axios from 'axios';
import { useState } from 'react';

const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });
      if (onSuccess) {
        onSuccess(response.data);
      }
      
      return response.data;
    } catch (err) {
      console.log(err)
      const errMsgs = err.response.data.errors.map(err => (
        `${err.message}`
      ))
      setErrors(errMsgs[0]);
    }
  };

  return { doRequest, errors };
};

export default useRequest