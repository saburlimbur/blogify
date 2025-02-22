import { useQuery } from '@tanstack/react-query';
import Posts from '../../service/Posts';

export const useGetPostById = (id) => {
  const {
    data: postById,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['postById', id],
    queryFn: () => Posts.getPostById(id),
    enabled: !!id,
  });

  return { postById, isLoading, isError };
};
