/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import SectionTitle from '../../components/fragments/SectionTitle';
import { useGetPostBySlug } from '../../hooks/Posts/useGetPostBySlug';
import LoadingElements from '../../components/elements/LoadingElements';
import ErrorElements from '../../components/elements/ErrorElements';

function DetailPostArticleSlug() {
  const { slug } = useParams();
  const { postBySlug, isLoading, isError } = useGetPostBySlug(slug);

  const { title } = postBySlug; // response object
  console.log('postBySlug', postBySlug);

  if (isLoading) {
    return <LoadingElements>Loading...</LoadingElements>;
  }

  if (isError) {
    return <ErrorElements>Error fetching post data</ErrorElements>;
  }

  return (
    <SectionTitle>
      <div>
        <h2>{slug}</h2>
      </div>
    </SectionTitle>
  );
}

export default DetailPostArticleSlug;
