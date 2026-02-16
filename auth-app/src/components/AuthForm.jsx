import { useState } from 'react';

const AuthForm = ({ title, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // DERIVED STATE: No extra useEffect or useState needed. 
  // It re-calculates every time the component re-renders.
  const isFormValid = email.includes('@') && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  console.log(`${title} rendered`); // Observe re-rendering in console

  return (
    <div className="form-card">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthForm;