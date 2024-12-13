import React from 'react';
import Sidebar from '../../Components/Admincomponents/Sidebar';
import Header from '../../Components/Admincomponents/Header';
import OverviewSection from '../../Components/Admincomponents/OverviewSection';
import StudentActivities from '../../Components/Admincomponents/StudentActivites';
import RecentActivities from '../../Components/Admincomponents/RecentActivites';
import AdminNav from '../../Components/AdminNav';

const HomeAdmin = () => {
  return (
<div>
     <AdminNav  />
    <div className="flex h-screen">
   
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* <Header /> */}
        <main className="p-10 bg-gray-100 flex-1 overflow-y-auto">
          <OverviewSection />
          <StudentActivities />
          <RecentActivities />
        </main>
      </div>
    </div>
    </div>
  );
};

export default HomeAdmin;
