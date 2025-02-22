import { useQuery } from '@tanstack/react-query';
import Tags from '../../service/Tags';

export const useGetAllTags = () => {
  const {
    data: allTags,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['tags'],
    queryFn: Tags.getAllTags,
  });

  return { allTags, isLoading, isError };
};
