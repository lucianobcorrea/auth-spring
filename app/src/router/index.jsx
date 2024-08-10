import { createBrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../ui/index.js';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />,
  },
]);
