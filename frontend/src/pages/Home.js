import { useState, useEffect } from 'react';
import SidebarRight from '../components/aside/SidebarRight';
import Loading from '../components/loading/Loading';
import Sidebar from '../components/aside/Sidebar';
import ReadMe from '../components/readme/ReadMe';

function Home() {


  return (
    <div className="so-main-wrapper flex flex-col">
      <div className="flex mx-auto my-0 w-[1400px]">
        <nav className="sticky max-h-[calc(100vh-180px)] top-[60px] w-[164px] flex-grow-0 flex-shrink-0 basis-[164px]">
          <Sidebar />
        </nav>
        <div>
          <ReadMe />
        </div>
        <aside className="w-[280px] flex-grow-0 flex-shrink-0 basis-[280px]">
          <SidebarRight />
        </aside>
      </div>
    </div>
  );
}

export default Home;