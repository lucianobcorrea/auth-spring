import { register } from '../../api/auth/register.api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export function useRegister() {
  const navigate = useNavigate();

  async function onSubmit(data) {
    try {
      await register(data);
      navigate('/login');
      toast.success('User Created');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return onSubmit;
}
