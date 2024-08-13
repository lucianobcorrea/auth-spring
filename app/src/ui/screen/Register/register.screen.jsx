import React from 'react';
import { Input, Button } from '../../index';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import 'react-toastify/dist/ReactToastify.css';
import { useRegister } from '../../../hook/index';

export function RegisterScreen() {
  const schema = z
    .object({
      email: z
        .string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Must be a valid email' }),
      password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
      confirm_password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters' }),
      username: z.string(),
    })
    .refine(
      (values) => {
        return values.password === values.confirm_password;
      },
      {
        message: 'Passwords must match!',
        path: ['confirm_password'],
      }
    );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = useRegister();

  return (
    <section className="min-h-screen flex justify-center flex-col">
      <h1 className="text-center text-6xl pb-6 font-semibold uppercase">
        Register
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-fit flex flex-col items-center gap-4"
        >
          <Input {...register('username')} type="text" placeholder="Username" />
          {errors.username ? (
            <div className="text-red-500 text-start w-full">
              {errors.username.message}
            </div>
          ) : null}

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

          <Input
            {...register('confirm_password')}
            type="password"
            placeholder="Password"
          />
          {errors.confirm_password ? (
            <div className="text-red-500 text-start w-full">
              {errors.confirm_password.message}
            </div>
          ) : null}

          <Button type="submit" text="Register" className="w-full" />
        </form>
      </div>
    </section>
  );
}