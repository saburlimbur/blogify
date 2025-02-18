import { Outlet } from 'react-router-dom';
import NavMenu from '../fragments/NavMenu';

function AppLayouts() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <div className="max-w-[1280px] mx-auto">
        <NavMenu />
        <div className="px-10 py-8">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export default AppLayouts;
