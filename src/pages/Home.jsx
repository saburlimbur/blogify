import ErrorElements from '../components/elements/ErrorElements';
import LoadingElements from '../components/elements/LoadingElements';
import Card from '../components/fragments/Card';
import SectionTitle from '../components/fragments/SectionTitle';
import { useGetAllPosts } from './../hooks/Posts/useGetAllPosts';
import { formatDate } from '../utils';
import { Link } from 'react-router-dom';

function Home() {
  const { allPosts, isLoading, isError } = useGetAllPosts();

  if (isLoading) return <LoadingElements />;
  if (isError) return <ErrorElements />;

  return (
    <SectionTitle>
      <div className="grid grid-cols-1 gap-10">
        {allPosts.length > 0 && (
          <div className="col-span-1">
            <Link to={`/posts/slug/${allPosts[0].slug}`}>
              <Card className="h-full flex flex-col justify-between cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-[1.02]">
                <div className="flex gap-6">
                  <Card.Image
                    src={allPosts[0].media}
                    className="w-full rounded-lg"
                  />
                  <div className="w-1/2 space-y-4 h-auto justify-between flex flex-col">
                    <Card.Header className="flex items-center">
                      <h4 className="text-sm font-medium text-gray-300">
                        {allPosts[0].category?.name}
                      </h4>
                      <span className="px-3 text-gray-300">•</span>
                      <h4 className="text-sm font-medium text-gray-300">
                        {formatDate(allPosts[0].createdAt)}
                      </h4>
                    </Card.Header>
                    <Card.Body className="space-y-4">
                      <h2 className="text-white font-bold text-xl">
                        {allPosts[0].title}
                      </h2>
                      <p className="text-gray-300 line-clamp-3">
                        {allPosts[0].content}
                      </p>
                    </Card.Body>
                    <div className="flex items-center gap-3">
                      <Card.Image
                        src={`https://randomuser.me/api/portraits/men/${Math.floor(Math.random() * 99) + 1}.jpg`}
                        className="w-10 h-10 rounded-full"
                      />
                      <Card.Footer>
                        <h3 className="font-medium text-lg">
                          {allPosts[0].author?.username}
                        </h3>
                        <p className="text-sm text-gray-300">
                          {allPosts[0].author?.position}
                        </p>
                      </Card.Footer>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        )}

        <div className="grid grid-cols-3 gap-8">
          {allPosts.slice(1).map((item) => {
            const randomId = Math.floor(Math.random() * 99) + 1;

            return (
              <div key={item.id} className="col-span-1">
                <Link to={`/posts/slug/${item.slug}`}>
                  <Card className="h-full flex flex-col justify-between cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105">
                    <Card.Image
                      src={item.media}
                      className="rounded-lg h-48 object-cover"
                    />
                    <div className="p-4 space-y-3">
                      <Card.Header className="flex items-center">
                        <h4 className="text-xs font-medium text-gray-300">
                          {item.category?.name}
                        </h4>
                        <span className="px-2 text-gray-300">•</span>
                        <h4 className="text-xs font-medium text-gray-300">
                          {formatDate(item.createdAt)}
                        </h4>
                      </Card.Header>
                      <Card.Body className="space-y-2">
                        <h2 className="text-white font-medium text-base">
                          {item.title}
                        </h2>
                        <p className="text-xs text-gray-300 line-clamp-2">
                          {item.content}
                        </p>
                      </Card.Body>
                      <div className="flex items-center gap-2">
                        <Card.Image
                          src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
                          className="w-8 h-8 rounded-full"
                        />
                        <Card.Footer>
                          <h3 className="text-sm font-medium">
                            {item.author?.username}
                          </h3>
                          <p className="text-xs text-gray-300">
                            {item.author?.position}
                          </p>
                        </Card.Footer>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </SectionTitle>
  );
}

export default Home;
