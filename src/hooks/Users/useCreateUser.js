import { useMutation } from '@tanstack/react-query';
import Users from '../../service/Users';
import toast from 'react-hot-toast';

export const useCreateUser = () => {
  const {
    mutate: createUser,
    isError,
    isSuccess,
    error,
    isLoading,
  } = useMutation({
    mutationKey: ['createUser'],
    mutationFn: async ({ username, email, phone_number, password, position }) =>
      await Users.createUser({
        username,
        email,
        phone_number,
        password,
        position,
      }),

    onSuccess: (payload) => {
      toast.success('User created successfully!');
      window.location.href = '/signin';

      console.log('User created successfully:', payload);
    },
    onError: (error) => {
      console.log('Error occurred while creating user:', error);
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error('Unexpected error occurred');
      }
    },
  });

  return { createUser, isError, isSuccess, error, isLoading };
};
