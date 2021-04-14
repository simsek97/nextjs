import React from 'react';
import Footer from './Footer';
import Marquee from './Marquee';
import dynamic from 'next/dynamic'


type TLayoutProps = {
  children: React.ReactNode;
};

const DynamicHeaderWithNoSSR = dynamic(
  () => import('./Header'),
  { ssr: false }
)

const Layout: React.FC<TLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className='layout'>
      <DynamicHeaderWithNoSSR />
      <Marquee />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
