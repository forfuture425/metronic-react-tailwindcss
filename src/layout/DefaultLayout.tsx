import React, { useState, ReactNode } from 'react';
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchModal from "../components/SearchModal";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex grow">
        <Sidebar />
        <div className="wrapper flex grow flex-col">
          <Header />
          <main className="grow content pt-5" id="content" role="content">
            <div className="container-fixed" id="content_container">
            </div>
            <div className="container-fixed">
              {/* place your content here */}
              {/* <Routes>
              <Route index element={ <SearchModal/> } />
              </Routes> */}
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </div>
      <SearchModal />
    </>
  );
};

export default DefaultLayout;
