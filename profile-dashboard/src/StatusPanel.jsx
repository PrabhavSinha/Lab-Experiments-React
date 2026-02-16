import React from 'react';

const StatusPanel = ({ status, onStatusChange }) => {
  console.log("[Render] StatusPanel");
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
      <h3>Status: <span style={{ color: status === 'Online' ? 'green' : 'red' }}>{status}</span></h3>
      <button onClick={() => onStatusChange('Online')}>Set Online</button>
      <button onClick={() => onStatusChange('Away')} style={{ marginLeft: '10px' }}>Set Away</button>
    </div>
  );
};

export default StatusPanel;