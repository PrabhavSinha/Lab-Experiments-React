// src/App.jsx
import UserCard from './components/UserCard';

function App() {
  // Mock data representing what you'd get from an API
  const userData = {
    name: "Prabhav Sinha",
    email: "prabhav1357@gmail.com",
    role: "AI Engineer"
  };

  return (
    <main style={{ padding: '2rem', textAlign: 'left' }}>
      <h1>System Dashboard</h1>
      <hr />
      {/* Passing the whole object as a prop */}
      <UserCard user={userData} />
    </main>
  );
}

export default App;