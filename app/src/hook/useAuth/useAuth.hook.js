import { login } from '../../api/auth/login.api';
import { user } from '../../api/auth/user.api';
import { useAuthContext } from '../../context/Auth.context';
import { toast } from 'react-toastify';

export function useAuth() {
  const { setIsLoggedIn, setAuthUser } = useAuthContext();

  async function onSubmit(data) {
    const loginValues = {
      email: data.email,
      password: data.password,
    };

    try {
      const response = await login(loginValues);
      const { token } = response.data;

      localStorage.setItem('token', token);

      const responseUser = await user();
      setAuthUser(responseUser);

      setIsLoggedIn(true);
      toast.success('Welcome');
    } catch (error) {
      setIsLoggedIn(false);
      toast.error('Incorrect email or password, please, try again.');
    }
  }

  return onSubmit;
}
