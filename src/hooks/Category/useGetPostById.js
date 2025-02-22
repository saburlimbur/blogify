import { useQuery } from '@tanstack/react-query';
import Category from '../../service/Category';

export const useGetCategoryById = () => {
  const {
    data: postById,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['postById'],
    queryFn: Category.getCategoryById,
  });
  return { postById, isLoading, isError };
};
