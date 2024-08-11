import React from 'react';
import { Input, Button } from '../../index';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { login } from '../../../api/auth/login.api';
import { useAuthContext } from '../../../context/Auth.context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
});

export function LoginScreen() {
  const { setIsLoggedIn } = useAuthContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    const loginValues = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await login(loginValues);
      const { token } = response.data;

      localStorage.setItem('token', token);

      setIsLoggedIn(true);
      toast.success('Welcome');
    } catch (error) {
      toast.error('Incorrect email or password, please, try again.');
    }
  };

  return (
    <section className="min-h-screen flex justify-center flex-col">
      <h1 className="text-center text-6xl pb-6 font-semibold uppercase">
        Login
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-4"
      >
        <Input {...register('email')} type="email" placeholder="Email" />
        {errors.email ? (
          <div className="text-red-500">{errors.email.message}</div>
        ) : null}

        <Input
          {...register('password')}
          type="password"
          placeholder="Password"
        />
        {errors.password ? (
          <div className="text-red-500">{errors.password.message}</div>
        ) : null}

        <Button type="submit" text="Login" />
      </form>
      <ToastContainer theme="dark" />
    </section>
  );
}
