import { useQuery } from '@tanstack/react-query';
import Users from '../../service/Users';

export const useGetAllUsers = () => {
  const {
    data: allUsers,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['users'],
    queryFn: Users.getAllUsers,
  });

  return { allUsers, isLoading, isError };
};
