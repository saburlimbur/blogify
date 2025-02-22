/* eslint-disable no-unused-vars */
import Card from '../components/fragments/Card';
import SectionTitle from '../components/fragments/SectionTitle';
import { useGetAllCategory } from '../hooks/Category/useGetAllCategory';
import Badge from '../components/elements/Badge';
import { Link, useParams } from 'react-router-dom';
import { useGetAllPosts } from '../hooks/Posts/useGetAllPosts';
import { formatDate } from '../utils';
import LoadingElements from '../components/elements/LoadingElements';
import ErrorElements from '../components/elements/ErrorElements';
import { useGetCategoryBySlug } from '../hooks/Category/useGetCategoryBySlug';

function Category() {
  // const { slug } = useParams();
  const { allCategory } = useGetAllCategory();
  const { allPosts, isLoading, isError } = useGetAllPosts();
  // const { postBySlug } = useGetCategoryBySlug(slug);

  console.log('allCategory:', allCategory);
  // console.log('postBySlug:', postBySlug);

  const { result: user } = JSON.parse(localStorage.getItem('sessionuser'));

  console.log('user:', user?.token);

  if (isLoading) {
    return <LoadingElements />;
  }

  if (isError) {
    return <ErrorElements />;
  }

  return (
    <SectionTitle>
      <Card className="justify-center items-center flex flex-col space-y-2">
        <Badge
          title="Category"
          className="bg-[#191a1a] py-2 px-4 rounded-full text-sm mb-4"
        />
        <Card.Header>
          <h3 className="text-2xl font-semibold text-white">
            Journey Through a Variety of Fascinating Topics
          </h3>
        </Card.Header>
        <Card.Header className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 text-sm">
            A place where curiosity knows no bounds. Explore, learn, and
            discover thought-provoking ideas across multiple disciplines.
          </p>
        </Card.Header>
      </Card>

      <div className="flex space-x-5 py-8 justify-center items-center">
        <Link className="py-2 px-6 rounded-full bg-[#191a1a] text-white cursor-pointer hover:bg-[#202121] transition-all ease-in">
          All
        </Link>

        {allCategory && Array.isArray(allCategory) && allCategory.length > 0 ? (
          allCategory.map((ctg) => (
            <Card
              key={ctg.id}
              className="py-2 px-6 rounded-full bg-[#191a1a] text-white cursor-pointer hover:bg-[#202121] transition-all ease-in"
            >
              <Card.Header className="text-sm font-semibold">
                {ctg?.name}
              </Card.Header>
            </Card>
          ))
        ) : (
          <p className="text-gray-300">No categories available.</p>
        )}
      </div>

      {/* post grid */}
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

export default Category;
