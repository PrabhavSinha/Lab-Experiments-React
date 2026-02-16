// src/components/UserCard.jsx
import InfoItem from './InfoItem'; // Importing a default export

const UserCard = ({ user }) => {
  const { name, email, role } = user; // ES6 Object Destructuring

  return (
    <div style={{ 
      padding: '16px', 
      border: '2px solid #646cff', 
      borderRadius: '12px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>User Profile</h2>
      <InfoItem label="Name" value={name} />
      <InfoItem label="Email" value={email} />
      <InfoItem label="Role" value={role} />
    </div>
  );
};

export default UserCard;