import React from 'react';

const RecentActivities = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="pb-2">Name</th>
            <th className="pb-2">Course</th>
            <th className="pb-2">ID</th>
            <th className="pb-2">Date</th>
            <th className="pb-2">Time</th>
            <th className="pb-2">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td>Sunday</td>
            <td>Gochim</td>
            <td>N002003</td>
            <td>Wed, Feb 16 2023</td>
            <td>10:25:43 AM</td>
            <td>Disbursed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default RecentActivities;
