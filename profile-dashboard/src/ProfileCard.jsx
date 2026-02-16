import React from 'react';

const ProfileCard = ({ name, role }) => {
  console.log("[Render] ProfileCard");
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', marginBottom: '10px' }}>
      <h2>{name}</h2>
      <p><strong>Role:</strong> {role}</p>
    </div>
  );
};

export default ProfileCard;