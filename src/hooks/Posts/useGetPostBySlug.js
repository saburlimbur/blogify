import { useQuery } from '@tanstack/react-query';
import Posts from '../../service/Posts';

export const useGetPostBySlug = (slug) => {
  const {
    data: postBySlug,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['postBySlug', slug],
    queryFn: () => Posts.getPostBySlug(slug),
    enabled: !!slug,
  });

  return { postBySlug, isLoading, isError };
};
