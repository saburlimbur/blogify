import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../elements/Button';
import Profile from '../elements/Profile';

function NavMenu() {
  const user = JSON.parse(localStorage.getItem('sessionuser'));

  if (user && user.result && user.result.token) {
    const token = user.result.token;
    console.log('Token:', token);
  } else {
    console.log('Token tidak ditemukan atau data tidak valid.');
  }

  const navigate = useNavigate();
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/',
    },
    {
      id: 2,
      name: 'Article',
      path: 'posts-article',
    },
    {
      id: 3,
      name: 'Category',
      path: '/categorys',
    },
  ];

  return (
    <nav className="w-full flex justify-between items-center py-10 px-5">
      <Link to="/" className="text-2xl font-bold uppercase">
        Blogify
      </Link>
      <ul className="flex space-x-8">
        {routes.map((route) => (
          <Link
            to={route.path}
            key={route.id}
            className="cursor-pointer hover:text-gray-200 transition-all ease-in-out px-2 py-1.5 rounded-md text-sm font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-300 after:transition-all after:duration-300 hover:after:w-full"
          >
            {route.name}
          </Link>
        ))}
      </ul>

      <div className="flex space-x-6 justify-center items-center">
        <div className="relative flex justify-center items-center">
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full py-4 px-12 text-xs bg-[#1A1A1A] text-white pl-12"
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
            <Search size={18} />
          </span>
        </div>

        <div>
          {user && user.result && user.result.token ? (
            <Profile />
          ) : (
            <Button
              className="px-4 py-3 rounded-lg border border-[#373737] text-sm font-semibold hover:bg-[#1A1A1A] transition-all ease-in"
              onClick={() => navigate('/signin')}
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
