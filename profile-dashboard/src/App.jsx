import { useState } from 'react';
import ProfileCard from './ProfileCard';
import StatusPanel from './StatusPanel';

function App() {
  // 1. Framework Abstraction: We manage 'user', not 'HTML elements'
  const [user, setUser] = useState({
    name: "Alex Rivera",
    role: "Senior Lead Engineer",
    status: "Online"
  });

  const handleStatusUpdate = (newStatus) => {
    // 2. Declarative Update: We update the data, React updates the UI.
    setUser({ ...user, status: newStatus });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h1>Dashboard</h1>
      
      {/* 3. Unidirectional Data Flow: Passing data down */}
      <ProfileCard name={user.name} role={user.role} />
      
      <StatusPanel 
        status={user.status} 
        onStatusChange={handleStatusUpdate} 
      />
      
      <footer style={{ marginTop: '20px', fontSize: '0.8rem', color: '#666' }}>
        Observe: No direct 'document.querySelector' was used.
      </footer>
    </div>
  );
}

export default App;