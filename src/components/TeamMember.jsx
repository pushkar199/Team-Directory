// // TeamMember.js
// import React from 'react';

// const TeamMember = ({ name, image, role }) => {
//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md">
//       <img src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4" />
//       <h3 className="text-xl font-bold">{name}</h3>
//       <p className="text-gray-600">{role}</p>
//     </div>
//   );
// };

// export default TeamMember;


// TeamMember.js
import React from 'react';

const TeamMember = ({ first_name, last_name, email, img }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 rounded-md shadow-md">
      <img src={img} alt={`${first_name} ${last_name}`} className="w-32 h-32 rounded-full mx-auto mb-4" />
      <div className="text-center">
        <h3 className="text-xl font-bold">{`${first_name} ${last_name}`}</h3>
        <p className="text-gray-600">{email}</p>
      </div>
    </div>
  );
};

export default TeamMember;
