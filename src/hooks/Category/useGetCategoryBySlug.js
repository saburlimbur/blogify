import { useQuery } from '@tanstack/react-query';
import Category from '../../service/Category';

export const useGetCategoryBySlug = (slug) => {
  const {
    data: postBySlug,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['postBySlug', slug],
    queryFn: Category.getCategoryBySlug(slug),
  });
  return { postBySlug, isLoading, isError };
};
