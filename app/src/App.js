import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { AuthProvider } from './context/Auth.context';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
