/* eslint-disable no-unused-vars */
import { useGetAllPosts } from '../../hooks/Posts/useGetAllPosts';
import ErrorElements from '../elements/ErrorElements';
import LoadingElements from '../elements/LoadingElements';
import SectionTitle from '../fragments/SectionTitle';

function GridCardPost() {
  const { allPosts, isLoading, isError } = useGetAllPosts();

  if (isLoading) {
    return <LoadingElements />;
  }

  if (isError) {
    return <ErrorElements />;
  }

  return (
    <SectionTitle>
      <div></div>
    </SectionTitle>
  );
}

export default GridCardPost;
