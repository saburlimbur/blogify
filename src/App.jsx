import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayouts from './components/layouts/AppLayouts';
import Home from './pages/Home';
import PostsArticle from './pages/PostArticle';
import Category from './pages/Category';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import DetailPostArticleId from './pages/posts/_id';
import DetailPostArticleSlug from './pages/posts/_slug';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts-article" element={<PostsArticle />} />
          <Route path="/posts/slug/:slug" element={<DetailPostArticleSlug />} />
          <Route path="/posts/id/:id" element={<DetailPostArticleId />} />
          <Route path="/categorys" element={<Category />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
