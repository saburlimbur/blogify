/* eslint-disable no-unused-vars */
import ErrorElements from '../components/elements/ErrorElements';
import LoadingElements from '../components/elements/LoadingElements';
import Card from '../components/fragments/Card';
import SectionTitle from '../components/fragments/SectionTitle';
import PostArticleList from '../components/template/PostArticleList';
import { useGetAllUsers } from '../hooks/Users/useGetAllUsers';
import { formatDate } from '../utils';
import { useGetAllPosts } from './../hooks/Posts/useGetAllPosts';
import { useGetPostById } from '../hooks/Posts/useGetPostById';
import { useParams } from 'react-router-dom';

function Home() {
  const { allPosts, isLoading, isError } = useGetAllPosts();
  const { allUsers } = useGetAllUsers();
  const { postById } = useGetPostById();

  console.log('allPosts:', allPosts);
  console.log('allUsers:', allUsers);
  console.log('postById:', postById);

  const sessionUser = JSON.parse(localStorage.getItem('sessionuser'));
  console.log('sessionUser:', sessionUser);

  if (isLoading) {
    return <LoadingElements />;
  }

  if (isError) {
    return <ErrorElements />;
  }

  return (
    <SectionTitle>
      <PostArticleList className="pb-5" />

      <div className="grid grid-cols-3 gap-8">
        {Array.isArray(allPosts) &&
          allPosts.map((item) => {
            const { id, author, title, content, media, createdAt, category } =
              item;
            const formattedDate = formatDate(createdAt);
            const randomId = Math.floor(Math.random() * 99) + 1;
            return (
              <Card
                key={id}
                className="space-y-3 flex flex-col h-auto justify-between cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-1"
              >
                <Card.Image src={media} className="rounded-lg" />
                <div className="">
                  <Card.Header className="flex items-center">
                    <h4 className="text-[13px] font-medium text-gray-300 ">
                      {category?.name}
                    </h4>
                    <span className="px-3 text-gray-300">•</span>
                    <h4 className="text-[13px] font-medium text-gray-300">
                      {formattedDate}
                    </h4>
                  </Card.Header>
                  <Card.Body className="space-y-2 py-2">
                    <h2 className="text-white font-medium text-sm">{title}</h2>
                    <p className="text-xs text-gray-300">{content}</p>
                  </Card.Body>
                  <div className="flex items-center space-x-3">
                    <Card.Image
                      src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <Card.Footer className="py-2">
                      <h3 className="font-medium text-[16px]">
                        {author?.username}
                      </h3>
                      <p className="text-xs text-gray-300">
                        {author?.position}
                      </p>
                    </Card.Footer>
                  </div>
                </div>
              </Card>
            );
          })}
      </div>
    </SectionTitle>
  );
}

export default Home;
