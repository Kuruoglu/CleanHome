import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import TopBar from './TopBar';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
