// TeamMember.js

import React from 'react';
import './TeamMember.css'; // Import CSS for the hover effect

const TeamMember = ({ first_name, last_name, email, img }) => {
  return (
    <div className="flex items-center p-4 bg-gray-200 rounded-md shadow-md hover:shadow-lg TeamMember">
      <img src={img} alt={`${first_name} ${last_name}`} className="w-32 h-32 rounded-full mr-4" />
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{`${first_name} ${last_name}`}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
