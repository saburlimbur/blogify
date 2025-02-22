import PropTypes from 'prop-types';
import { dummyPostArticle, formatDate } from '../../utils';
import Card from '../fragments/Card';
import SectionTitle from '../fragments/SectionTitle';

function PostArticleList({ className }) {
  return (
    <SectionTitle className={className}>
      <div className="grid grid-cols-1 space-y-10">
        {Array.isArray(dummyPostArticle) &&
          dummyPostArticle.map((item) => {
            const { id, author, title, content, media, createdAt, category } =
              item;
            const formattedDate = formatDate(createdAt);
            const randomId = Math.floor(Math.random() * 99) + 1;
            return (
              <Card key={id} className="flex space-x-8">
                <div className="lg:w-8/12 md:w-7/12">
                  <Card.Image className="rounded-xl" src={media} alt={title} />
                </div>

                <div className="lg:w-4/12 md:w-5/12 w-full px-4 space-y-6">
                  <Card.Header className="flex items-center">
                    <h4 className="text-[15px] font-medium text-[#83858D]">
                      {category?.name}
                    </h4>
                    <span className="px-3 text-[#83858D]">•</span>
                    <h4 className="text-[15px] font-medium text-[#83858D]">
                      {formattedDate}
                    </h4>
                  </Card.Header>
                  <Card.Body className="space-y-4">
                    <h2 className="text-white font-medium text-lg">{title}</h2>
                    <p className="text-sm font-medium text-[#83858D]">
                      {content}
                    </p>
                  </Card.Body>
                  <div className="flex items-center space-x-3">
                    <Card.Image
                      src={`https://randomuser.me/api/portraits/men/${randomId}.jpg`}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <Card.Footer>
                      <h3 className="font-semibold">{author?.username}</h3>
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

PostArticleList.propTypes = {
  className: PropTypes.string,
};

export default PostArticleList;
