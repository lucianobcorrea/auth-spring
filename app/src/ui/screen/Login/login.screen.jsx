import React from 'react';
import { Input, Button } from '../../index';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth, useLogout } from '../../../hook/index';
import { useAuthContext } from '../../../context/Auth.context';

export function LoginScreen() {
  const schema = z.object({
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Must be a valid email' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = useAuth();
  const logout = useLogout();

  const { authUser } = useAuthContext();

  return (
    <>
      {authUser ? (
        <section className="text-end me-5">
          <Button
            type="button"
            className="mt-5"
            onClick={() => logout()}
            text="Logout"
          />
        </section>
      ) : null}

      <section className="min-h-screen flex justify-center flex-col">
        <h1 className="text-center text-6xl pb-6 font-semibold uppercase">
          Login
        </h1>
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-fit flex flex-col items-center gap-4"
          >
            <Input {...register('email')} type="email" placeholder="Email" />
            {errors.email ? (
              <div className="text-red-500 text-start w-full">
                {errors.email.message}
              </div>
            ) : null}

            <Input
              {...register('password')}
              type="password"
              placeholder="Password"
            />
            {errors.password ? (
              <div className="text-red-500 text-start w-full">
                {errors.password.message}
              </div>
            ) : null}

            <Button type="submit" text="Login" className="w-full" />
          </form>
        </div>
      </section>
    </>
  );
}
