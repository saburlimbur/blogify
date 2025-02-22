import { useQuery } from '@tanstack/react-query';
import Category from '../../service/Category';

export const useGetAllCategory = () => {
  const {
    data: allCategory,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['categorys'],
    queryFn: Category.getAllCategory,
  });

  return { allCategory, isLoading, isError };
};
