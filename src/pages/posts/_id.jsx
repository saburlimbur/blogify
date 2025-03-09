/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import { useGetPostById } from '../../hooks/Posts/useGetPostById';
import SectionTitle from '../../components/fragments/SectionTitle';
import LoadingElements from '../../components/elements/LoadingElements';
import Card from '../../components/fragments/Card';
import { formatDate } from '../../utils';
import Comments from '../../components/elements/Comments';
import { Menu } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import Button from '../../components/elements/Button';

function DetailPostArticleId() {
  const { id } = useParams();
  const { postById, isLoading, isError } = useGetPostById(id);

  console.log('postById:', postById);

  if (isLoading) {
    return <LoadingElements>Loading...</LoadingElements>;
  }

  if (isError) {
    return <LoadingElements>Error fetching post data</LoadingElements>;
  }

  const { title, content, author, category, tags, createdAt, media, comments } =
    postById || {};
  const formattedDate = formatDate(createdAt);
  const randomId = Math.floor(Math.random() * 99) + 1;

  const userData = JSON.parse(localStorage.getItem('sessionuser'));
  const loggedInUser = userData?.result;

  // authorId mengembalikan username yang sesuai by id author
  const getUsernameById = (authorId) => {
    if (loggedInUser && loggedInUser.id === authorId) {
      return loggedInUser.username; // dan mengambil data username dari storage local
    }
    return 'Unknown Author';
  };

  const commentsWithUsernames = comments
    ? comments.map((comment) => ({
        ...comment,
        authorUsername: getUsernameById(comment.authorId),
        // mengganti author id menjadi authorUsername
      }))
    : [];

  return (
    <SectionTitle>
      <div className="container mx-auto">
        <Card
          key={id}
          className="justify-center items-center flex flex-col gap-8 "
        >
          <Card.Header className="space-y-6">
            <div className="flex items-center justify-center">
              <h4 className=" text-center text-[13px] font-medium text-gray-300 ">
                {category?.name}
              </h4>
              <span className="text-center px-3 text-gray-300">•</span>
              <h4 className="text-[13px] font-medium text-gray-300">
                {formattedDate}
              </h4>
            </div>

            <h2 className="text-2xl font-semibold text-white max-w-xl text-center">
              {title}
            </h2>

            <div className="flex justify-center items-center gap-3">
              <Card.Image
                src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-[16px]">{author?.username}</h3>
                <p className="text-xs text-gray-300">{author?.position}</p>
              </div>
            </div>
          </Card.Header>
          <Card.Image src={media} className="w-full object-cover rounded-lg" />
          <Card.Footer className="max-w-3xl mx-auto border-b border-b-[#343434] pb-8">
            {content}
          </Card.Footer>
        </Card>

        {/* comments */}
        <div className="flex flex-col justify-center w-full max-w-2xl mx-auto py-4">
          <h2 className="text-2xl font-semibold">Comments</h2>
          <Comments />

          {commentsWithUsernames.length > 0 ? (
            commentsWithUsernames.map((comment) => (
              <div
                key={comment.id}
                className="flex p-4 rounded-lg mt-4 w-full max-w-2xl mx-auto"
              >
                <img
                  src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
                  alt="Comment Author"
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />

                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-sm text-white">
                        {comment.authorUsername}
                      </h4>
                      <p className="text-xs text-gray-400">
                        {formatDate(comment.createdAt)}
                      </p>
                    </div>
                    <Button className="text-xs text-gray-400">
                      <EllipsisVertical size={18} />
                    </Button>
                  </div>

                  <p className="mt-2 text-sm text-gray-300">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p>No Comments Found</p>
          )}
        </div>
      </div>
    </SectionTitle>
  );
}

export default DetailPostArticleId;
