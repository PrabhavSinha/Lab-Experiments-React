import { useState } from 'react';
import AuthForm from './components/AuthForm';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // Lifted state
  const [isLoginView, setIsLoginView] = useState(true);

  const handleAuth = (data) => {
    // Simulate authentication
    setUser(data.email);
    console.log("Authenticated as:", data.email);
  };

  if (user) {
    return (
      <div className="dashboard">
        <h1>Welcome, {user}!</h1>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    );
  }

  return (
    <div className="app-container">
      {isLoginView ? (
        <AuthForm title="Sign In" onSubmit={handleAuth} />
      ) : (
        <AuthForm title="Sign Up" onSubmit={handleAuth} />
      )}
      <button onClick={() => setIsLoginView(!isLoginView)}>
        Switch to {isLoginView ? 'Sign Up' : 'Sign In'}
      </button>
    </div>
  );
}

export default App;