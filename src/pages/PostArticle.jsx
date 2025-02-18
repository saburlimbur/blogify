import { Link } from 'react-router-dom';
import SectionTitle from '../components/fragments/SectionTitle';

function PostsArticle() {
  return (
    <SectionTitle>
      <div>
        <h2>Posts</h2>
        <Link to="/post-article/post-pertama">Post 1</Link>
      </div>
    </SectionTitle>
  );
}

export default PostsArticle;
