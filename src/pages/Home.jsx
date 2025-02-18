import ErrorElements from '../components/elements/ErrorElements';
import LoadingElements from '../components/elements/LoadingElements';
import SectionTitle from '../components/fragments/SectionTitle';
import { useGetAllPosts } from './../hooks/Posts/useGetAllPosts';

function Home() {
  const { allPosts, isLoading, isError } = useGetAllPosts();

  console.log('allPosts:', allPosts);

  if (isLoading) {
    return <LoadingElements />;
  }

  if (isError) {
    return <ErrorElements />;
  }

  return (
    <SectionTitle>
      <div>
        <h2>Home</h2>
      </div>
    </SectionTitle>
  );
}

export default Home;
