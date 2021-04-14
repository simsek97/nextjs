import React from "react";
import dynamic from 'next/dynamic'
import Footer from "./Footer";

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
    <div className="layout">
      <DynamicHeaderWithNoSSR />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
