import React from 'react';
import Footer from './Footer';
import Marquee from './Marquee';


type TLayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className='layout'>
      <Marquee />
      <Footer />
    </div>
  );
};

export default Layout;
