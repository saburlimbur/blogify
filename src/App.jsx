import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayouts from './components/layouts/AppLayouts';
import Home from './pages/Home';
import PostsArticle from './pages/PostArticle';
import DetailPostArticle from './pages/posts/_slug';
import Category from './pages/Category';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/posts-article" element={<PostsArticle />} />
          <Route path="/post-article/:slug" element={<DetailPostArticle />} />
          <Route path="/categorys" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
