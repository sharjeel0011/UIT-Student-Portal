import React from 'react';
import Sidebar from '../../Components/Admincomponents/Sidebar';
import Header from '../../Components/Admincomponents/Header';
import OverviewSection from '../../Components/Admincomponents/OverviewSection';
import StudentActivities from '../../Components/Admincomponents/StudentActivites';
import RecentActivities from '../../Components/Admincomponents/RecentActivites';

const HomeAdmin = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <OverviewSection />
          <StudentActivities />
          <RecentActivities />
        </main>
      </div>
    </div>
  );
};

export default HomeAdmin;
