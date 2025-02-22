import { useParams } from 'react-router-dom';
import { useGetPostById } from '../../hooks/Posts/useGetPostById';
import SectionTitle from '../../components/fragments/SectionTitle';
import LoadingElements from '../../components/elements/LoadingElements';

function DetailPostArticleId() {
  const { id } = useParams();
  const { postById, isLoading, isError } = useGetPostById(id);

  if (isLoading) {
    return <LoadingElements>Loading...</LoadingElements>;
  }

  if (isError) {
    return <LoadingElements>Error fetching post data</LoadingElements>;
  }

  console.log('postById:', postById);
  return (
    <SectionTitle>
      <div>
        <h2>Detail Post By Id</h2>
      </div>
    </SectionTitle>
  );
}

export default DetailPostArticleId;
