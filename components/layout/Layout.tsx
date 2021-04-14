import React from "react";
import Footer from "./Footer";

type TLayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<TLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className="layout">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
