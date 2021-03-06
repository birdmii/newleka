import { useState } from 'react';
import Meta from './Meta';
import Nav from './Nav';
import Sidebar from './Sidebar';
import Footer from './Footer';

const MainLayout = ({ children, query, handleQuery, handleSubmit, handleShowSearchBar, isSearchShow, handleClick}) => {
  const [isSideBarOpen, setSideBar] = useState(false);

  const handleShowSideNav = () => {
    setSideBar(!isSideBarOpen);
  }

  return (
    <>
      <Meta />
      <Nav query={query} handleQuery={handleQuery} handleSubmit={handleSubmit} handleShowSideNav={handleShowSideNav} handleShowSearchBar={handleShowSearchBar} isSearchShow={isSearchShow} />
      <div className="container flex-horizontal-center">
        <Sidebar isSideBarOpen={isSideBarOpen} handleShowSideNav={handleShowSideNav} handleClick={handleClick}/>
        <div className="w-100">
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
