import { useMutation } from '@tanstack/react-query';
import Comments from '../../service/Comments';

export const useCreateComment = () => {
  const { mutate: createComment } = useMutation({
    mutationKey: ['createCooment'],
    mutationFn: async ({ content, postId }) =>
      await Comments.createComment({ content, postId }),
  });

  return { createComment };
};
