import { Outlet } from 'react-router';
import { Header } from './Header';
import { Footer} from './Footer';

export const Layout = () => {
  return (
    <div className="app-container">
      <Header title="My Profile Page" />
      <Outlet />
      <Footer  year={2026} />
    </div>
  );
};