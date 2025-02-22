import { Outlet } from 'react-router-dom';
import NavMenu from '../fragments/NavMenu';
import Footer from '../fragments/Footer';

function AppLayouts() {
  return (
    <main className="min-h-screen bg-[#0C0C0D] text-white">
      <div className="max-w-[1080px] mx-auto">
        <NavMenu />
        <div className="px-10 py-8">
          <Outlet />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default AppLayouts;
