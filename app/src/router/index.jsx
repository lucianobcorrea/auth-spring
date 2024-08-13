import { createBrowserRouter } from 'react-router-dom';
import { LoginScreen, RegisterScreen } from '../ui/index.js';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />,
  },
  {
    path: '/register',
    element: <RegisterScreen />,
  },
]);
