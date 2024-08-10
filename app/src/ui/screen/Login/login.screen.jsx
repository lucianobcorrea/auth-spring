import React from 'react';
import { useAuth } from '../../../hook/index';
import { Input, Button } from '../../index';

export function LoginScreen() {
  const { loginInput, handleChange, handleSubmit } = useAuth();

  return (
    <section className="min-h-screen flex justify-center flex-col">
      <h1 className="text-center text-6xl pb-6 font-semibold uppercase">Login</h1>
      <form
        className="flex flex-col items-center gap-4"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          name="email"
          value={loginInput.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <Input
          type="password"
          name="password"
          value={loginInput.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" text="Login" />
      </form>
    </section>
  );
}
