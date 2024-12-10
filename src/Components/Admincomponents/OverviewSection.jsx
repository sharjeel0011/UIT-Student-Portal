import React from 'react';
import OverviewCard from './OverviewCard';
import { FaUserGraduate, FaUserCheck, FaUserTimes, FaDollarSign } from 'react-icons/fa';

const OverviewSection = () => {
  const data = [
    { color: 'bg-blue-100', icon: FaUserGraduate, title: 'Total Student', value: 5300 },
    { color: 'bg-green-100', icon: FaUserCheck, title: 'Active Student', value: 3000 },
    { color: 'bg-red-100', icon: FaUserTimes, title: 'Inactive Student', value: 2300 },
    { color: 'bg-yellow-100', icon: FaDollarSign, title: 'Fees (Paid)', value: 100000 },
    { color: 'bg-pink-100', icon: FaDollarSign, title: 'Fees (Unpaid)', value: 80000 },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 mb-6">
      {data.map((item, index) => (
        <OverviewCard key={index} {...item} />
      ))}
    </div>
  );
};

export default OverviewSection;
