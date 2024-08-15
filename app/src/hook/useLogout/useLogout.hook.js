import { logoutApi } from '../../api/auth/logout.api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/Auth.context';

export function useLogout() {
  const navigate = useNavigate();
  const { setAuthUser, setIsLoggedIn } = useAuthContext();

  async function logout() {
    try {
      const token = localStorage.getItem('token');

      await logoutApi(token);
      navigate('/login');
      toast.success('Saiu da conta');

      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setAuthUser(null);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return logout;
}
