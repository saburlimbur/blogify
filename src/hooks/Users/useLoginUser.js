import { useMutation } from '@tanstack/react-query';
import Users from '../../service/Users';
import toast from 'react-hot-toast';

export const useLoginUser = () => {
  const {
    mutate: loginUser,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useMutation({
    mutationKey: ['loginUser'],
    mutationFn: async ({ username, email, password }) =>
      await Users.loginUser({ username, email, password }),

    onSuccess: (payload) => {
      toast.success('Login user successfully!');
      window.location.href = '/';
      console.log('Login user successfully:', payload);
    },

    onError: (error) => {
      console.log('Error occurred during login:', error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Unexpected error occurred');
      }
    },
  });

  return { loginUser, isError, isSuccess, error, isLoading };
};
