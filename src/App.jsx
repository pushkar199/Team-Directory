
import React, { useState, useEffect } from 'react';
import TeamMember from './components/TeamMember'; // Importing TeamMember component

const App = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098')
      .then(response => response.json())
      .then(data => {
        setTeamMembers(data);
        setFilteredMembers(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);
    const filtered = teamMembers.filter(member => {
      const fullName = `${member.first_name} ${member.last_name}`.toLowerCase();
      return fullName.includes(searchTerm);
    });
    setFilteredMembers(filtered);
  };

  const admins = filteredMembers.filter(member => member.role === 'admin');
  const members = filteredMembers.filter(member => member.role === 'member');

  return (
    <div className="container mx-auto">
      <nav className="flex justify-between items-center bg-skyblue p-4">
        <div className="text-white font-bold text-2xl">Team</div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="px-5 py-1 rounded-2xl border"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </nav>
      <div className="container mx-auto px-4 py-8">
        

        {admins.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 mt-7 text-gray">Administrators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {admins.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        )}

        <hr className="my-8 border-gray-300 border-dashed" />

        {members.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray">Members</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {members.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default App;
