import { useQuery } from '@tanstack/react-query';
import Posts from '../../service/Posts';

export const useGetAllPosts = () => {
  const {
    data: allPosts,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: Posts.getAllPosts,
  });

  return { allPosts, isLoading, isError };
};
