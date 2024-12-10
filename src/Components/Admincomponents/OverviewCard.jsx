import React from 'react';

const OverviewCard = ({ color, icon: Icon, title, value }) => {
  return (
    <div className={`p-4 rounded-lg ${color}`}>
      <div className="flex items-center">
        <Icon className="text-2xl mr-4" />
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
