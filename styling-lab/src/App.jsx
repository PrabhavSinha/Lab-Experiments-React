import { useState, useRef } from 'react';
import LayoutWrapper from './components/LayoutWrapper';

function App() {
  // 1. Controlled Input (React State)
  const [name, setName] = useState("");

  // 2. Uncontrolled Input (useRef)
  const emailRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Controlled Name:", name);
    console.log("Uncontrolled Email:", emailRef.current.value);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <LayoutWrapper>
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Controlled Input: UI is synced with React State */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Name (Controlled):</label>
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Type name..."
            />
            <p className="text-xs text-gray-400 mt-1">State: {name}</p>
          </div>

          {/* Uncontrolled Input: DOM maintains its own state */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700">Email (Uncontrolled):</label>
            <input 
              type="email" 
              ref={emailRef}
              className="mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Type email..."
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
          >
            Submit Data
          </button>
        </form>
      </LayoutWrapper>
    </div>
  );
}

export default App;