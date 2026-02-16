// src/components/InfoItem.jsx
const InfoItem = ({ label, value }) => {
  // Arrow function and Destructuring in action
  return (
    <div className="info-item" style={{ margin: '8px 0' }}>
      <span style={{ fontWeight: 'bold', color: '#555' }}>{label}: </span>
      <span>{value}</span>
    </div>
  );
};

export default InfoItem; // Default Export