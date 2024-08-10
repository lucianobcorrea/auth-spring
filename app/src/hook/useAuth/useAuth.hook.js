import { useState } from 'react';
import { login } from '../../api/auth/login.api';

export function useAuth() {
  const [loginInput, setLoginInput] = useState({ email: '', password: '' });

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await login(loginInput);
      const { token } = response.data;

      localStorage.setItem('token', token);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setLoginInput((oldLoginInput) => ({
      ...oldLoginInput,
      [name]: value,
    }));
  }

  return {
    loginInput,
    handleChange,
    handleSubmit,
  };
}
